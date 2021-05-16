<template>
  <main class="home">
    <Banner :bgImage="$withBase($page.frontmatter.bannerBg)" />
    <RecentUpdate />
    <Footer />
  </main>
</template>

<script>
import Banner from './Banner.vue';
import RecentUpdate from './RecentUpdate.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
  components: { Banner, RecentUpdate, Footer },
};
</script>
