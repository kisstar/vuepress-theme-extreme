<template>
  <div class="not-found" :style="{ 'background-image': `url(${degaultNotFount})` }">
    <p class="found-text">
      您找的页面已经跑到火星上面了，再
      <Link :item="resultLink" />
      别的吧。
    </p>
  </div>
</template>

<script>
import Link from '@theme/components/Link.vue';
import degaultNotFount from '@theme/assets/images/404.png';

export default {
  components: {
    Link,
  },
  data() {
    return {
      degaultNotFount,
      link: {
        text: '看看',
        link: '/',
      },
    };
  },
  computed: {
    resultLink() {
      if (this.$site.themeConfig.notFoundInfo) {
        return this.$site.themeConfig.notFoundInfo;
      }

      return this.link;
    },
  },
};
</script>
