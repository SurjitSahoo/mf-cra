const { ModuleFederationPlugin } = require('webpack').container;
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const fs = require('fs');
const path = require('path');

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

/**
 * @returns {string}
 */
function getPublicPath() {
  let publicPath = 'auto';
  const providedPath = process.env.PUBLIC_URL;

  if (providedPath && providedPath.length >= 0 && providedPath.startsWith('http')) {
    publicPath = providedPath.endsWith('/') ? providedPath : providedPath + '/';
  }
  return publicPath
}

const override = config => {

  const projectDir = path.resolve(fs.realpathSync(process.cwd()));
  const mfConfigPath = path.resolve(projectDir, 'moduleFederation.config.js');

  if (fs.existsSync(mfConfigPath)) {
    const mfConfig = require(mfConfigPath);
    config.plugins.push(new FederatedTypesPlugin({ federationConfig: mfConfig, typescriptFolderName: path.resolve(projectDir, 'public/@mf-types') }));
    // config.plugins.push(new ModuleFederationPlugin(mfConfig));
    config.output.publicPath = getPublicPath();
  }

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
