module.exports = ctx => ({
  theme: 'vuepress-theme-extreme',
  title: "Kisstar's 博客",
  themeConfig: {
    nav: [
      {
        text: '博客园',
        link: 'https://www.cnblogs.com/dongwanhong/',
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
        text: '简历',
        link: 'https://dongwanhong.gitee.io/resume/',
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
    directories: [
      {
        id: 'post',
        dirname: 'vuepress',
        path: '/',
      },
    ],
  },
});
