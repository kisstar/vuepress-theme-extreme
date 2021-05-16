<template>
  <component :is="layout" />
</template>

<script>
export default {
  name: 'GlobalLayout',
  computed: {
    layout() {
      if (this.$page.path) {
        const { layout } = this.$page.frontmatter;

        // 如果页面的 frontmatter 指定了布局组件则使用对应的组件
        if (layout) {
          return layout;
        }

        // 使用默认的布局组件（./Layout.vue）
        return 'Layout';
      }

      // 如果是匹配不到的路由（./404.vue）
      return 'NotFound';
    },
  },
};
</script>
