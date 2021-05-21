<template>
  <main>
    <Banner :bgImage="$withBase($themeConfig.banner || banner)" />
    <RecentUpdate />
  </main>
</template>

<script>
import banner from '@theme/assets/images/banner.jpg';
import Banner from './Banner.vue';
import RecentUpdate from './RecentUpdate.vue';

export default {
  name: 'Home',
  components: { Banner, RecentUpdate },
  data() {
    return {
      banner,
    };
  },
};
</script>
