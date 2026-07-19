export default function (plop) {
  console.log("cwd:", process.cwd());
  plop.setGenerator("component", {
    description: "Generate a React component with a SCSS module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the component name (e.g., CustomButton):",
        validate: (value) => {
          console.log("cwd:", process.cwd());
          if (/.+/.test(value)) {
            return true;
          }
          return "Component name is required";
        },
      },
    ],
    actions: [
      {
        type: "add",
        // Using process.cwd() to generate files in the directory where the command is run
        path: `${process.cwd()}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: "plop-templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: `${process.cwd()}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
        templateFile: "plop-templates/component/Component.module.scss.hbs",
      },
    ],
  });

  plop.setGenerator("feature", {
    description: "Generate a new feature structure",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the feature name (e.g., shoppingCart):",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "Feature name is required";
        },
      },
      {
        type: "checkbox",
        name: "subfolders",
        message: "Select subfolders to generate:",
        choices: [
          { name: "api", checked: true },
          { name: "assets", checked: false },
          { name: "components", checked: true },
          { name: "hooks", checked: false },
          { name: "stores", checked: false },
          { name: "types", checked: false },
          { name: "utils", checked: false },
        ],
      },
    ],
    actions: (data) => {
      const actions = [];
      const basePath = "src/features/{{camelCase name}}";

      if (data.subfolders && data.subfolders.length > 0) {
        data.subfolders.forEach((folder) => {
          actions.push({
            type: "add",
            path: `${basePath}/${folder}/.gitkeep`,
            templateFile: "plop-templates/feature/gitkeep.hbs",
          });
        });
      }

      return actions;
    },
  });
}
