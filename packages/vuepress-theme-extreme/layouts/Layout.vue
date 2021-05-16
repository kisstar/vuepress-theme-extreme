<template>
  <div class="theme-container">
    <div class="theme-extreme">
      <Navbar />
      <Home v-if="$page.frontmatter.home" />
      <Article v-else />
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import Home from '@theme/pages/home/index.vue';
import Article from '@theme/pages/article/index.vue';

export default {
  name: 'Layout',
  components: { Navbar, Home, Article },
};
</script>
