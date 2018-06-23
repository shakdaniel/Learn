module.exports = config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-preset-env')()
    ]
  });

  return config;
};

const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    // ...
    config = rewireCssModules(config, env);
    // ...
    return config;
}