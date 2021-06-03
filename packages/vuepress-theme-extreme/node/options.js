exports.getBlogPluginOptions = function getBlogPluginOptions(themeConfig) {
  const blogPluginOptions = {};
  // Configure blog plugin
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: 'posts',
        path: '/',
        layout: 'Layout', // default: IndexPost, fallback to Layout
        itemLayout: 'Post', // default: Post
      },
    ],
    frontmatters: [
      {
        // Unique ID of current classification
        id: 'tag',
        // Decide that the frontmatter keys will be grouped under this classification
        keys: ['tag', 'tags'],
        // Path of the `entry page` (or `list page`)
        path: '/tag/',
        // Layout of the `entry page`
        layout: 'Tags',
        // Layout of the `scope page`
        scopeLayout: 'Tag',
      },
    ],
    globalPagination: {
      lengthPerPage: 10,
    },
  };

  ['directories', 'frontmatters'].forEach(prop => {
    blogPluginOptions[prop] = themeConfig[prop] || defaultBlogPluginOptions[prop];
  });
  ['globalPagination', 'comment'].forEach(prop => {
    blogPluginOptions[prop] = { ...defaultBlogPluginOptions[prop], ...themeConfig[prop] };
  });
  blogPluginOptions.directories.forEach(item => {
    Object.assign(
      item,
      {
        layout: 'Layout',
        itemLayout: 'Post',
      },
      item,
    );
  });

  return blogPluginOptions;
};

exports.getLastUpdatedOptions = function getLastUpdatedOptions() {
  return {
    /**
     * 接受一个 13 位的时间戳和当前语言，返回值可以使用 $page.lastUpdated 访问
     * @param {*} timestamp 一个 13 位的时间戳
     * @param {*} lang 查看: https://en.wikipedia.org/wiki/Language_localisation
     */
    transformer(timestamp, _lang) {
      return new Date(timestamp)
        .toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        .replace(/\//g, '-');
    },
  };
};
