<template>
  <div class="theme-container post">
    <div class="theme-extreme">
      <Navbar />
      <Article />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import Article from '@theme/pages/article/index.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  name: 'Layout',
  components: { Navbar, Article, Footer },
};
</script>
