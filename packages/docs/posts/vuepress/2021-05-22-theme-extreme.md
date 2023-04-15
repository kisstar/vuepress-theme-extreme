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

静态站点生成器 VuePress 提供了可扩展的主题功能，大家可以根据自己的喜好进行定制。在遵守相应规范前提下，创建一个主题就像开发一个普通的 Vue 应用一样。

官方提供了通过简单配置就能直接使用的技术文档类主题，同时也提供了一些常见的插件，vupress-theme-extreme 就是建立在这些之上的一个博客主题。

## 如何使用

当你使用本主题的时候，只需要将 theme 设置为 @kisstar/vuepress-theme-extreme 即可：

```js
// .vuepress/config.js
module.exports = {
  theme: '@kisstar/vuepress-theme-extreme',
};
```

看，就是这么简单。

## 基本配置

由于 vupress-theme-extreme 主题是基于 VuePress 之上的，所以基本配置在 VuePress 官方文档上都有说明，下面列举几个比较常用的配置。

### host

- 类型: `string`
- 默认值: '0.0.0.0'

指定用于 dev server 的主机名。

### port

- 类型: `number`
- 默认值: 8080

指定 dev server 的端口。

### dest

- 类型: `string`
- 默认值: .vuepress/dist

指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 `process.cwd()` 进行解析。

### locales

- 类型: `{ [path: string]: Object }`
- 默认值: undefined

提供多语言支持的语言配置。具体细节请查看 多语言支持。

### base

- 类型: `string`
- 默认值: `/`

指定部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 <https://foo.github.io/bar/>，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。

### title

- 类型: `string`
- 默认值: `undefined`

网站的标题，它将会被用作所有页面标题的前缀，同时，它将显示在导航栏。

### description

- 类型: `string`
- 默认值: `undefined`

网站的描述，它将会以 `<meta>` 标签渲染到当前页面的 HTML 中。

### head

- 类型: `Array`
- 默认值: `[]`

额外的需要被注入到当前页面的 HTML `<head>` 中的标签，每个标签都可以以 `[tagName, { attrName: attrValue }, innerHTML?]` 的格式指定。

```js
module.exports = {
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
};
```

### themeConfig

- 类型: `object`
- 默认值: `{}`

为当前的主题提供一些配置，这些选项依赖于你正在使用的主题，本主题支持的配置可参考主题配置部分。

## 主题配置（themeConfig）

### banner

- 类型: `string`
- 默认随机图片。

指定 Banner 背景图。

### knownTitle

- 类型: `string`
- 默认为空。

指定 Banner 标题。

### subTitle

- 类型: `string`
- 默认为空。

指定 Banner 子标题。

### lastUpdated

- 类型: `string`
- 默认为: “最近更新”。

指定首页文章列表顶部的标题文案。

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

### 导航栏链接

你可以通过 `themeConfig.nav` 增加一些顶部导航栏链接:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'External',
        link: 'https://google.com',
        target: '_blank', // 在新窗口中打开被链接文档
        rel: 'noopener noreferrer',
      },
    ],
  },
};
```

当你提供了一个 items 数组时，它将显示为一个下拉列表 ：

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

### 目录、分页和标签分类器

主题的目录分类器会对放置在同一目录中的源页进行分类。你可以自定义相应的布局组件，包括进入页面的路径和帖子的永久链接：

```js
module.exports = {
  themeConfig: {
    directories: [
      {
        id: 'post', // 当前分类的唯一标识
        dirname: 'posts', // 文章存放的目录
        path: '/', // 页面的路径
        itemPermalink: '/:year/:month/:day/:slug', // 文章的链接地址，必须以路径开头
      },
    ],
    globalPagination: {
      lengthPerPage: 10, // 每页的最大条目数
    },
    // 指定所有标签的集合，其中的键表示标签的名称，值是对应标签的详细信息。
    tags: {
      tagName: {
        cover: '/images/demo.webp',
        des: '标签的描述信息。',
      },
      // ...
    },
  },
};
```

## 评论

评论功能我们可以使用 Vssue 来实现，你可以在官方文档上查看更多详细的配置介绍。

```js
module.exports = {
  themeConfig: {
    comment: {
      // Which service you'd like to use
      service: 'vssue',
      // The owner's name of repository to store the issues and comments.
      owner: 'You',
      // The name of repository to store the issues and comments.
      repo: 'Your repo',
      // The clientId & clientSecret introduced in OAuth2 spec.
      clientId: 'Your clientId',
      clientSecret: 'Your clientSecret',
      // Optional
      state: 'Comment',
      labels: ['Comment'],
      prefix: ['[Comment] '],
    },
  },
};
```

## 其它

除了上面的配置说明外，你还可以参考线上的运行案例 <https://kisstar.github.io/>，欢迎 Star 或提交 ISSUE。

## 参考

- [VuePress](https://vuepress.vuejs.org/zh/)
- [@vuepress/plugin-blog](https://www.picchu.cn/)
- [介绍 | Vssue](https://vssue.js.org/zh/guide/#vssue-%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84)
