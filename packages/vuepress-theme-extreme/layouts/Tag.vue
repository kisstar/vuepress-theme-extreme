<template>
  <div class="theme-container tag">
    <div class="theme-extreme">
      <Navbar />
      <div class="article-list-container">
        <h3 class="title">VuePress</h3>
        <Latest />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import Latest from '@theme/components/Latest.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  name: 'Layout',
  components: { Navbar, Latest, Footer },
};
</script>
