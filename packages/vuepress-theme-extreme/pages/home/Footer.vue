<template>
  <div class="footer">
    <div class="copyright-container">
      <p>
        Theme developed by
        <NavLink :item="linkInfo.kisstar" />
        & Powered by
        <NavLink :item="linkInfo.vuepress" />
        .
      </p>
      <p>Copyright © 2020. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';

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
    NavLink,
  },
  data() {
    return {
      linkInfo,
    };
  },
};
</script>
