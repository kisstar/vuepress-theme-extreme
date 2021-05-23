<template>
  <main>
    <Banner :bgImage="$withBase($themeConfig.banner || banner)" />
    <RecentUpdate />
    <div v-if="$pagination.length > 1" class="see-more">
      <Link :item="link" />
    </div>
  </main>
</template>

<script>
import Link from '@theme/components/Link.vue';
import banner from '@theme/assets/images/banner.jpg';
import Banner from './Banner.vue';
import RecentUpdate from './RecentUpdate.vue';

export default {
  name: 'Home',
  components: { Banner, RecentUpdate, Link },
  data() {
    return {
      banner,
    };
  },
  computed: {
    link() {
      return {
        text: '查看更多',
        link: '/page/2',
      };
    },
  },
};
</script>
