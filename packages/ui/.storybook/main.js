const process = require("process");
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
       include: path.resolve(__dirname, '../'),
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
    ];
    // this is needed for working w/ linked folders
    config.resolve.symlinks = false;
    return config;
  }  
}