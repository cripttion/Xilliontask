const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Wrap the default Metro config with Reanimated's Metro config
const reanimatedConfig = wrapWithReanimatedMetroConfig(defaultConfig);

// Add any custom config (if needed)
const customConfig = {
  resolver: {
    // Ensure the `.cjs` extension is resolved for Reanimated
    sourceExts: ['js', 'json', 'ts', 'tsx', 'cjs'],
  },
};

module.exports = mergeConfig(reanimatedConfig, customConfig);
