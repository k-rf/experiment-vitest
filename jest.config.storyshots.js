const baseConfig = require("./jest.config");

/** @type { import("@jest/types").Config.InitialOptions } */
const config = {
  ...baseConfig,
  testMatch: ["<rootDir>/storyshots.spec.ts"],
};

module.exports = config;
