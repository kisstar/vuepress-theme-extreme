<template>
  <div class="theme-container" :class="pageClass">
    <div class="theme-extreme">
      <Navbar />
      <main class="theme-content">
        <DefaultGlobalLayout />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue';
import Navbar from '@theme/components/Navbar.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  name: 'GlobalLayout',
  components: { DefaultGlobalLayout: GlobalLayout, Navbar, Footer },
  computed: {
    pageClass() {
      let className = 'home';

      if (this.$pagination && this.$pagination.paginationIndex > 0) {
        className = 'page';
      }

      return className;
    },
  },
};
</script>
