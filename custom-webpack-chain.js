const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (config, options = {}) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({
        configFile: './tsconfig.base.json'
    }));
    return config;
}
