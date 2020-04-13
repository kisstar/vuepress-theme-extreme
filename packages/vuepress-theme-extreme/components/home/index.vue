<template>
  <main class="home">
    <Banner :bgImage="$withBase($page.frontmatter.bannerBg)" />
  </main>
</template>

<script>
import Banner from './Banner.vue';

export default {
  name: 'Home',
  components: { Banner },
};
</script>
