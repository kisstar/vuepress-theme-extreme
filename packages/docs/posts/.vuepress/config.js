module.exports = ctx => ({
  theme: 'vuepress-theme-extreme',
  title: "Kisstar's 博客",
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  // 主题配置
  themeConfig: {
    // 导航栏的配置
    nav: [
      {
        text: '掘金',
        link: 'https://juejin.cn/user/870468942050759',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        text: '思否',
        link: 'https://segmentfault.com/u/dongwanhong/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        text: '笔记',
        link: 'https://dongwanhong.gitee.io/notebook/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        text: '案列',
        link: 'https://dongwanhong.gitee.io/source-code/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        text: '个人博客',
        link: 'https://dongwanhong.gitee.io/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/kisstar',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
    // 目录分类配置
    directories: [
      {
        id: 'post',
        dirname: 'vuepress',
        path: '/',
      },
    ],
    // 标签的描述信息
    tags: {
      VuePress: {
        cover: '/images/vuepress.jpg',
        des: 'VuePress 是一个基于 Vue 的轻量级静态网站生成器，以及为编写技术文档而优化的默认主题。',
      },
    },
    // 获取在原文编辑地址
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    repo: 'kisstar/vuepress-theme-extreme',
    docsDir: 'packages/docs/posts',
    lastUpdated: '最近更新',
    // 评论
    comment: {
      service: 'vssue',
      // platform: 'gitee',
      owner: 'kisstar',
      repo: 'vuepress-theme-extreme',
      clientId: 'Iv1.bd3ea5fca9cb6e59',
      clientSecret: 'b3e536aae13122e7d3ab595aff81e9de98a032e3',
    },
  },
});
