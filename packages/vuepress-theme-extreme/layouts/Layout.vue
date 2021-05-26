<template>
  <Pagination v-if="isPagination" />
  <Home v-else />
</template>

<script>
import Home from '@theme/pages/home/index.vue';
import Pagination from '@theme/pages/pagination/index.vue';

export default {
  name: 'Layout',
  components: { Home, Pagination },
  computed: {
    isPagination() {
      return this.$pagination.paginationIndex > 0;
    },
  },
};
</script>
