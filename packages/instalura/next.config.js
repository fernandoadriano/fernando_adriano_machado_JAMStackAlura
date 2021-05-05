const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@fernandoadriano/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
