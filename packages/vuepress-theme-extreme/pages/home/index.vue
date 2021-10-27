<template>
  <section>
    <Banner
      :bgImage="$withBase($themeConfig.banner || banner)"
      :knownTitle="$themeConfig.knownTitle"
      :subTitle="$themeConfig.subTitle"
    />
    <RecentUpdate />
    <div v-if="$pagination && $pagination.length > 1" class="see-more">
      <Link :item="link" />
    </div>
  </section>
</template>

<script>
import Link from '@theme/components/Link.vue';
import Banner from './Banner.vue';
import RecentUpdate from './RecentUpdate.vue';

export default {
  name: 'Home',
  components: { Banner, RecentUpdate, Link },
  data() {
    return {
      banner: 'https://img.paulzzh.tech/touhou/random',
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
