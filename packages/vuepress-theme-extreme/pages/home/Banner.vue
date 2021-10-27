<template>
  <div class="banner" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="title-wrapper">
      <h1 class="title">{{ knownTitle }}</h1>
      <h3 class="sub-title">
        {{ subTitle }}
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
    knownTitle: VueTypes.string,
    subTitle: VueTypes.string,
  },
};
</script>
