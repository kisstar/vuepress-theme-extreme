<template>
  <client-only>
    <a v-if="item.target === '_blank'" :href="item.link" :target="item.target" :rel="item.rel">
      {{ item.text }}
    </a>
    <RouterLink v-else :to="item.link" :exact="item.link === '/'">
      {{ item.text }}
    </RouterLink>
  </client-only>
</template>

<script>
import VueTypes from '@theme/lib/vue-types';

export default {
  name: 'Link',
  props: {
    item: VueTypes.object.def(() => {}),
  },
};
</script>
