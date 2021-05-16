/**
 * @file 主题文件的入口文件
 * @description 导出主题的配置，可以应用一些插件
 */

const path = require('path');

const resolve = (...p) => path.resolve(__dirname, '../', ...p);

module.exports = () => {
  return {
    globalLayout: resolve('layouts'),
  };
};
