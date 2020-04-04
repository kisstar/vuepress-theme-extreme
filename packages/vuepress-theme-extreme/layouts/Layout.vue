<template>
  <div class="theme-container">
    <div class="theme-extreme">
      <Navbar />
      <Page />
    </div>
  </div>
</template>

<script>
import Page from '@theme/components/Page.vue';
import Navbar from '@theme/components/Navbar.vue';

export default {
  name: 'Layout',
  components: { Navbar, Page },
};
</script>
