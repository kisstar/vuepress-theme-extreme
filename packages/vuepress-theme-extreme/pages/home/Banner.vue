<template>
  <div class="banner" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="search-wrapper">
      <input type="text" placeholder="What are you looking for?" />
      <button>Search</button>
    </div>
  </div>
</template>

<script>
import VueTypes from '../../lib/vue-types';

export default {
  name: 'Banner',
  props: {
    bgImage: VueTypes.string,
  },
};
</script>
