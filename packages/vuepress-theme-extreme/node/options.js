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
