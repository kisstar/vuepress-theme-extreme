---
thumbnail: /images/blog-plugin.png
title: VuePress Blog Plugin
summary: VuePress 是基于 Vue.js 推出的一个可扩展的静态站点生成器，创建它是为了支持 Vue 自己的子项目的文档需求。后来，VuePress 1.x 引入了插件系统，极大地提高了 VuePress 的可扩展性。@vuepress/plugin-blog 就是 VuePress 1.x 的作者创建的一个 VuePress 插件，其目的是降低开发 VuePress 博客主题 AFAP 的成本。
author: Kisstar
location: 北京
date: 2021-05-21
tags:
  - VuePress
  - Vue
---

<img :src="$withBase('/images/blog-plugin.png')" />

VuePress 是基于 Vue.js 推出的一个可扩展的静态站点生成器，创建它是为了支持 Vue 自己的子项目的文档需求。

后来，VuePress 1.x 引入了插件系统，极大地提高了 VuePress 的可扩展性。@vuepress/plugin-blog 就是 VuePress 1.x 的作者创建的一个 VuePress 插件，其目的是降低开发 VuePress 博客主题 AFAP 的成本。

## Directory Classifier

目录分类器，对放置在同一目录中的源页进行分类。假设您有以下文件结构：

```bash
.
└── _posts
    ├── 2018-4-4-intro-to-vuepress.md
    └── 2019-6-8-intro-to-vuepress-next.md
```

然后启用该插件，并传递相应的配置：

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
          },
        ],
      },
    ],
  ],
};
```

然后该插件将帮助您生成以下页面，并自动利用相应的布局：

| 路由                                | 渲染组件                                    |
| :---------------------------------- | :------------------------------------------ |
| /                                   | IndexPost (fallback to Layout if not exist) |
| /2018/04/04/intro-to-vuepress/      | Post                                        |
| /2019/06/08/intro-to-vuepress-next/ | Post                                        |

你可以自定义相应的布局组件，包括进入页面的路径和帖子的永久链接：

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
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
    ],
  ],
};
```

## Pagination

默认情况下，这个插件集成了一个非常强大的分页系统，允许您通过简单的配置访问分页函数。默认情况下，插件假定每页的最大页数为 10。您也可以这样修改它：

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            pagination: {
              lengthPerPage: 2, // default: 10
            },
          },
        ],
      },
    ],
  ],
};
```

现在，该插件除了帮你上面提到的页面外，还会生成一个分页页面：

| 路由     | 渲染组件                                              |
| :------- | :---------------------------------------------------- |
| /page/2/ | DirectoryPagination (fallback to Layout if not exist) |

如果我们需要在布局页面中拿到匹配的页面只需要访问 `this.$pagination.pages`，最开始匹配的 2 个页面会在匹配到首页，更多页面则是在 `/page/n/` 的页面中（n 的可能值跟页面数和分页基数相关）。

## Frontmatter Classifier

Frontmatter 对具有相同 Frontmatter 键值的页面进行分类。假设您有三页：

```bash
# a.md
---
tag: vue
---

# b.md
---
tag: vue
---

# c.md
---
tag: vue
---
```

如果您想它们进行分类，可以这样配置：

```js
module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tags',
            // Layout of the `scope page`
            scopeLayout: 'Tag',
          },
        ],
      },
    ],
  ],
};
```

然后该插件将帮助您生成以下额外页面，并自动利用相应的布局：

| 路由      | 渲染组件                                             |
| :-------- | :--------------------------------------------------- |
| /tag/     | Tags (fallback to FrontmatterKey if not exist)       |
| /tag/vue/ | Tag (fallback to FrontmatterPagination if not exist) |
| /tag/js/  | Tag (fallback to FrontmatterPagination if not exist) |

在 `<Tags/>` 组件中，可以使用 `this.$frontmatterKey.list` 获取标记列表。该值如下所示：

```js
[
  {
    "name": "vue",
    "path": "/tag/vue/",
    "pages": [
      { "relativePath": "b.md", "path": "/b.html" ... },
      { "relativePath": "a.md", "path": "/a.html" ... },
    ]
  },
  {
    "name": "js",
    "path": "/tag/js/",
    "pages": [
      { "relativePath": "c.md", "path": "/c.html" ... },
    ]
  }
]
```

在 FrontmatterPagination 组件中，可以使用此 `this.$pagination.pages` 获取当前标记分类中的匹配页：

```js
[
  { "relativePath": "b.md", "path": "/b.html" ... },
  { "relativePath": "a.md", "path": "/a.html" ... },
]
```

## Sitemap

Sitemap 是一个 XML 文件，可以帮助搜索引擎更好地索引您的博客。文件将通过如下简单地传递您的主机名来生成。

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        sitemap: {
          hostname: 'https://yourdomain',
        },
      },
    ],
  ],
};
```

## Comment

Vssue 是一个基于 Vue 的开放源码项目，可以为静态页面提供评论，你可以使用现成的 `<Comment>` 组件：

```vue
// layouts/Post.vue
<template>
  <div>
    <Content />
    <Comment />
  </div>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components';

export default {
  components: {
    Comment,
  },
};
</script>
```

然后告诉插件你要使用 Vssue 服务，并给定相应的配置：

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
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
        },
      },
    ],
  ],
};
```
