<template>
  <div class="banner" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="title-wrapper">
      <h1 class="title">Kisstar</h1>
      <h3 class="sub-title">
        If you can't explain it simply, you don't understand it well enough.
      </h3>
    </div>
    <div class="search-wrapper">
      <SearchBox />
      <!-- <input type="text" placeholder="What are you looking for?" /> -->
      <!-- <button>Search</button> -->
    </div>
  </div>
</template>

<script>
import VueTypes from '../../lib/vue-types';
import SearchBox from '@SearchBox';

export default {
  name: 'Banner',
  components: {
    SearchBox,
  },
  props: {
    bgImage: VueTypes.string,
  },
};
</script>
