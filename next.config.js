const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: config => {
    config.node = {
      fs: "empty"
    };
    config.module.rules.forEach(rule => {
      // search for the sass loader
      if (String(rule.test) === String(/\.scss$/)) {
        // append the sass-resources-loader
        rule.use.push({
          loader: "sass-resources-loader",
          options: {
            // Provide path to the file with resources
            resources: ["./globalStyles/app.scss"]
          }
        });
      }
    });
    return config;
  },

  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
});
