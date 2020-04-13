<template>
  <div class="theme-container">
    <div class="theme-extreme">
      <Navbar />
      <Home v-if="$page.frontmatter.home" />
      <Page v-else />
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import Home from '@theme/components/home/index.vue';
import Page from '@theme/components/Page.vue';

export default {
  name: 'Layout',
  components: { Navbar, Home, Page },
};
</script>
