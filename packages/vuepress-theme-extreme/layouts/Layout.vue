<template>
  <div class="theme-container" :class="isPagination ? 'page' : 'home'">
    <div class="theme-extreme">
      <Navbar />
      <Pagination v-if="isPagination" />
      <Home v-else />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import Home from '@theme/pages/home/index.vue';
import Pagination from '@theme/pages/pagination/index.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  name: 'Layout',
  components: { Navbar, Home, Pagination, Footer },
  computed: {
    isPagination() {
      return this.$pagination.paginationIndex > 0;
    },
  },
};
</script>
