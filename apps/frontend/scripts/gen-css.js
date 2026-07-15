import fs from "node:fs";
import clipboard from "clipboardy";

const filePath = process.argv[2];

if (!filePath) {
  console.error("No file path provided.");
  process.exit(1);
}

const text = fs.readFileSync(filePath, "utf8");

const matches = [...text.matchAll(/styles\.([A-Za-z_$][\w$]*)/g)];

const classes = [...new Set(matches.map((m) => m[1]))].sort();

const css = classes.map((name) => `.${name} {\n\n}`).join("\n\n");

await clipboard.write(css);

console.log(`Copied ${classes.length} classes to clipboard.`);
