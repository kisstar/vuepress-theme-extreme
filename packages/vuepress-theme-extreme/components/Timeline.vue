<template>
  <ul class="timeline">
    <li class="time-node" v-for="item in data" :key="item.link" :data-title="item.time">
      <h3>{{ item.title }}</h3>
      <img v-if="item.thumbnail" :src="item.thumbnail" />
      <p>{{ item.excerpt }}</p>
    </li>
  </ul>
</template>

<script>
import VueTypes from '../lib/vue-types';

export default {
  name: 'Timeline',
  props: {
    data: VueTypes.array.def(() => []),
  },
};
</script>
