/**
 * @file 主题文件的入口文件
 * @description 导出主题的配置，可以应用一些插件
 */

const { resolve } = require('path');

const { getBlogPluginOptions, getLastUpdatedOptions } = require('./node/options');

/**
 * @param {Object} themeConf 用户对主题的配置，由当前主题处理实现
 * @param {Object} ctx 编译期上下文
 * @returns 主题本身的配置，由 VuePress 本身提供支持
 */
module.exports = (themeConf, ctx) => {
  const config = {};
  const plugins = [];
  // Merge default theme configuration
  const themeConfig = {
    globalLayout: resolve(__dirname, 'layouts'),
    ...themeConf,
  };
  const blogPluginOptions = getBlogPluginOptions(themeConfig);
  const lastUpdatedOptions = getLastUpdatedOptions();

  plugins.push(['@vuepress/blog', blogPluginOptions]);
  plugins.push(['@vuepress/last-updated', lastUpdatedOptions]);
  plugins.push('@vuepress/search');

  // 获取处理后的配置
  Object.assign(config, {
    themeConfig,
    plugins,
  });

  return config;
};
