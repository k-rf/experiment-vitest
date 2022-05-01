/** @type { import("@jest/types").Config.InitialOptions } */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    ".+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        sourceMaps: true,
        module: {
          type: "ESNext",
        },
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

module.exports = config;
