<template>
  <div :class="['divider', type]"></div>
</template>
<script>
export default {
  name: 'Divider',
  props: {
    type: {
      type: String,
      default: 'horizontal',
    },
  },
};
</script>
