const { mergeConfig } = require("vite");

/** @types { import("@storybook/core-common").StorybookConfig } */
const config = {
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storyshots",
  ],
  features: {
    interactionsDebugger: true,
  },
  // viteFinal: async (config, { configType }) => {
  //   return mergeConfig(config, { configType });
  // },
};

module.exports = config;
