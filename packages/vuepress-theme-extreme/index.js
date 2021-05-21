/**
 * @file 主题文件的入口文件
 * @description 导出主题的配置，可以应用一些插件
 */

const path = require('path');

const resolve = (...p) => path.resolve(__dirname, '../', ...p);

/**
 * @param {Object} themeConfig 用户对主题的配置，由当前主题处理实现
 * @param {Object} ctx 编译期上下文
 * @returns 主题本身的配置，由 VuePress 本身提供支持
 */
module.exports = (themeConfig, ctx) => {
  const oThemeConfig = {
    globalLayout: resolve('layouts'),
    ...themeConfig,
  };
  const blogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: 'posts',
        path: '/',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tags'],
        path: '/tag/',
      },
    ],
    globalPagination: {
      lengthPerPage: 10,
    },
  };
  const plugins = [['@vuepress/blog', blogPluginOptions]];
  const config = {
    themeConfig: oThemeConfig,
    plugins,
  };

  return config;
};
