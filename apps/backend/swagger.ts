import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";
import fs from "fs";
import YAML from "yaml";
import path from "path";

import z from "zod";
import { productRegistry } from "./src/product/docs";
import { authRegistry } from "./src/auth/swagger";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const backendDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(backendDir, "../..");
const registry = new OpenAPIRegistry();

extendZodWithOpenApi(z);
productRegistry(registry);
authRegistry(registry);

const generator = new OpenApiGeneratorV3(registry.definitions);
const openApiDoc = generator.generateDocument({
  openapi: "3.0.0",
  info: { title: "KICKS SERVER API", version: "1.0.0" },
});

const yamlApi = YAML.stringify(openApiDoc);
const swaggerFilePath = path.join(backendDir, "swagger.yaml");
const brunoOutputDir = path.join(projectRoot, "bruno");
const generatedCollectionName = "KICKS SERVER API";
const generatedCollectionPath = path.join(brunoOutputDir, generatedCollectionName);

fs.writeFileSync(swaggerFilePath, yamlApi, "utf8");

// Remove old generated collection if exists
if (fs.existsSync(generatedCollectionPath)) {
  fs.rmSync(generatedCollectionPath, { recursive: true, force: true });
  console.log(`🗑️  Removed old collection: ${generatedCollectionName}`);
}

// Do  i realy need to regenerate Bruno collection every time?
try {
  execSync(
    `npx --no-install bru import openapi --source "${swaggerFilePath}" --output "${brunoOutputDir}" --collection-name "${generatedCollectionName}"`,
    { stdio: "inherit", cwd: backendDir },
  );
  console.log(`✅ Bruno collection '${generatedCollectionName}' generated successfully!`);
} catch (error) {
  console.error(
    "❌ Failed to generate Bruno collection:",
    error instanceof Error ? error.message : String(error),
  );
  process.exit(1);
}
