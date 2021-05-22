<template>
  <footer class="footer">
    <div class="copyright-container">
      <p>
        Theme developed by
        <Link :item="linkInfo.kisstar" />
        & Powered by
        <Link :item="linkInfo.vuepress" />
        .
      </p>
      <p>Copyright © 2020. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import Link from '@theme/components/Link.vue';

const linkInfo = Object.freeze({
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
    };
  },
};
</script>
