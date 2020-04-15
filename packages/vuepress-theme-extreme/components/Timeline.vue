<template>
  <ul class="timeline">
    <li class="time-node" v-for="item in data" :key="item.src" :data-title="item.time">
      <h3>{{ item.title }}</h3>
      <img v-if="item.img" :src="item.img" />
      <p>{{ item.des }}</p>
    </li>
  </ul>
</template>

<script>
import VueTypes from '../lib/vue-types';

export default {
  name: 'RecentUpdate',
  props: {
    data: VueTypes.array.def(() => []),
  },
};
</script>
