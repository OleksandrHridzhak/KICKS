module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "test", "refactor", "chore", "docs"],
    ],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["frontend", "backend", "global"]],
  },
};
