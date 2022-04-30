import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "@happy-dom/jest-environment",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|svg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/style-mock.js",
  },
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

export default config;
