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
        id: 'tag',
        keys: ['tags'],
        path: '/tag/',
      },
    ],
    globalPagination: {
      lengthPerPage: 10,
    },
  };

  ['directories', 'frontmatters'].forEach(prop => {
    blogPluginOptions[prop] = themeConfig[prop] || defaultBlogPluginOptions[prop];
  });
  ['globalPagination'].forEach(prop => {
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
