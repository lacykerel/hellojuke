'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  modify: (baseConfig, {target, dev}, webpack) => {
    const appConfig = Object.assign({}, baseConfig);

      appConfig.module.rules.push({
        test: /.scss$/,
        use: 'css-loader',
      });
    return appConfig;
  }
};
