const wingsuitCore = require('@wingsuit-designsystem/core');

const wingsuitConfig = wingsuitCore.resolveConfig('storybook');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // return config;
    return wingsuitCore.getAppPack(wingsuitConfig, [config]);
  },
};