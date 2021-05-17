<template>
  <ul class="latest">
    <li class="latest-item" v-for="item in data" :key="item.link">
      <img class="thumbnail" v-if="item.thumbnail" :src="item.thumbnail" />
      <div class="content">
        <h3 class="title">{{ item.title }}</h3>
        <p class="excerpt">{{ item.excerpt }}</p>
        <p class="time">{{ item.time }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import VueTypes from '../lib/vue-types';

export default {
  name: 'Latest',
  props: {
    data: VueTypes.array.def(() => []),
  },
};
</script>
