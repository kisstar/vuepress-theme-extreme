<template>
  <div :class="['divider', type]"></div>
</template>
<script>
import VueTypes from '../lib/vue-types';

export default {
  name: 'Divider',
  props: {
    type: VueTypes.string.def('horizontal'),
  },
};
</script>
