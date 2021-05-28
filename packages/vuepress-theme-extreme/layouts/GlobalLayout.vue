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

const pageClassMap = {
  '/': 'home',
  '/tag/': 'tags',
};

export default {
  name: 'GlobalLayout',
  components: { DefaultGlobalLayout: GlobalLayout, Navbar, Footer },
  computed: {
    pageClass() {
      const { path } = this.$page;

      if (!path) {
        return 'not-found';
      }

      if (pageClassMap[path]) {
        return pageClassMap[path];
      }

      if (/\/tag\/\w+/.test(path)) {
        return 'tag';
      }

      if (/\/page\/\d+/.test(path)) {
        return 'page';
      }

      return 'post';
    },
  },
};
</script>
