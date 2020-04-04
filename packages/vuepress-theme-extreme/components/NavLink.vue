<template>
  <a v-if="item.target === '_blank'" :href="item.link" :target="item.target" :rel="item.rel">
    {{ item.text }}
  </a>
  <RouterLink v-else :to="item.link" :exact="item.link === '/'">
    {{ item.text }}
  </RouterLink>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
