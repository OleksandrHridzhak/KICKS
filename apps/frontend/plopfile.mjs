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
}
