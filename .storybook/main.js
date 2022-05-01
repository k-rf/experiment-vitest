/** @type { import("@storybook/core-common").StorybookConfig } */
const config = {
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // core: {
  //   builder: "@storybook/builder-vite",
  // },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  features: {
    interactionsDebugger: true,
    modernInlineRender: true,
  },
  // webpackFinal: (config) => {
  //   delete config.resolve.alias["emotion-theming"];
  //   delete config.resolve.alias["@emotion/styled"];
  //   delete config.resolve.alias["@emotion/core"];

  //   config.node = { fs: "empty" };

  //   return config;
  // },
};

module.exports = config;
