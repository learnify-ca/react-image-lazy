const devConfig = require("./config/webpack.dev");
const prodConfig = require("./config/webpack.prod");

module.exports = [prodConfig, devConfig];