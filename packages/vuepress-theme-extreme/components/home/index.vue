<template>
  <main class="home">
    <Banner :bgImage="$withBase($page.frontmatter.bannerBg)" />
    <RecentUpdate />
  </main>
</template>

<script>
import Banner from './Banner.vue';
import RecentUpdate from './RecentUpdate.vue';

export default {
  name: 'Home',
  components: { Banner, RecentUpdate },
};
</script>
