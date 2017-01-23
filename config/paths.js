/**
 * Created by jiawei6 on 2017/1/23.
 */
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appIndexJs: resolveApp('src/index.js'),
  appHtml: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules')
};