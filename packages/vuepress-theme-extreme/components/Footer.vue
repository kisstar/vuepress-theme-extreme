<template>
  <footer class="footer">
    <div class="copyright-container">
      <p>
        <Link :item="linkInfo.theme" />
        developed by
        <Link :item="linkInfo.kisstar" />
        & Powered by
        <Link :item="linkInfo.vuepress" />
        .
      </p>
      <p>Copyright © {{ year }}. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import Link from '@theme/components/Link.vue';

const linkInfo = Object.freeze({
  theme: {
    text: 'vuepress-theme-extreme',
    link: 'https://github.com/kisstar/vuepress-theme-extreme',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  kisstar: {
    text: 'Kisstar',
    link: 'https://github.com/kisstar/',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  vuepress: {
    text: 'VuePress',
    link: 'https://vuepress.vuejs.org/',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
});

export default {
  name: 'Footer',
  components: {
    Link,
  },
  data() {
    return {
      linkInfo,
      year: new Date().getFullYear(),
    };
  },
};
</script>
