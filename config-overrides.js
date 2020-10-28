const path = require("path");

module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, "src/client/index.js");
    paths.appSrc = path.resolve(__dirname, "src/client/");
    return paths;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.watchOptions.ignored = [path.resolve(__dirname, "public/images/")];

      return config;
    };
  },
};
