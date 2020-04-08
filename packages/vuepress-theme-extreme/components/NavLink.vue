<template>
  <a v-if="item.target === '_blank'" :href="item.link" :target="item.target" :rel="item.rel">
    {{ item.text }}
  </a>
  <RouterLink v-else :to="item.link" :exact="item.link === '/'">
    {{ item.text }}
  </RouterLink>
</template>

<script>
import VueTypes from '../lib/vue-types';

export default {
  name: 'NavLink',
  props: {
    item: VueTypes.object.def(() => {}),
  },
};
</script>
