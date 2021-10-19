---
thumbnail: /images/theme-extreme.png
title: VuePress Extreme Theme
summary: 静态站点生成器 VuePress 提供了可扩展的主题功能，大家可以根据自己的喜好的风格进行定制，在遵守相应规范前提下，创建一个主题就像开发一个普通的 Vue 应用一样。官方提供了通过简单配置就能直接使用的技术文档类主题，同时也提供了一些常见的插件，vupress-theme-extreme 就是建立在这些之上创建的一个博客主题。
author: Kisstar
location: 北京
date: 2021-05-22
tags:
  - VuePress
  - Vue
---

静态站点生成器 VuePress 提供了可扩展的主题功能，大家可以根据自己的喜好的风格进行定制，在遵守相应规范前提下，创建一个主题就像开发一个普通的 Vue 应用一样。

官方提供了通过简单配置就能直接使用的技术文档类主题，同时也提供了一些常见的插件，vupress-theme-extreme 就是建立在这些之上创建的一个博客主题。

## 基本配置

### title

- 类型: `string`
- 默认值: `undefined`

网站的标题，它将会被用作所有页面标题的前缀，同时，它将显示在导航栏。

## 主题

### theme

- 类型: `string`
- 默认值: `undefined`

当你使用本主题的时候，需要将其设置为 vupress-theme-extreme。

### themeConfig

- 类型: `object`
- 默认值: `{}`

为当前的主题提供一些配置，这些选项依赖于你正在使用的主题，本主题支持的配置可参考主题配置部分。

## 主题配置

### 导航栏 Logo

你可以通过 `themeConfig.logo` 增加导航栏 Logo ，Logo 可以被放置在公共文件目录（.vuepress/public）：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
  },
};
```

### 导航栏 链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
  },
};
```

当你提供了一个 items 数组 时，它将显示为一个下拉列表 ：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
    ],
  },
};
```

### 目录分类器

主题的目录分类器会对放置在同一目录中的源页进行分类。你可以自定义相应的布局组件，包括进入页面的路径和帖子的永久链接：

```js
module.exports = {
  themeConfig: {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug', // itemPermalink must be prefixed with path
        layout: 'MyIndexPost', // // default: IndexPost, fallback to Layout
        itemLayout: 'MyPost', // default: Post
      },
    ],
  },
};
```
