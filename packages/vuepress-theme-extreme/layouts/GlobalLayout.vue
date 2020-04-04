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
        if (layout) {
          return layout;
        }
        return 'Layout';
      }
      return 'NotFound';
    },
  },
};
</script>
