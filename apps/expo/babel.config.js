module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      'react-native-reanimated/plugin',
      // https://expo.github.io/router/docs/intro#configure-the-babel-plugin
      require.resolve('expo-router/babel'),
      //'react-native-web',
    //   ["module-resolver", {
    //   "alias": {
    //     "^react-native$": "react-native-web"
    //   }
    // }]
    ],
  }
}
