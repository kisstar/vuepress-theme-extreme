<template>
  <div class="card">
    <div class="card-cover">
      <img :src="info.cover || degaultTagCover" alt="" class="card-img" />
      <h5 class="card-title">{{ `${info.name} (${info.length})` }}</h5>
    </div>
    <div class="card-content">
      <div class="card-text">
        {{ info.des }}
      </div>
      <Link :item="link" />
    </div>
  </div>
</template>

<script>
import VueTypes from '@theme/lib/vue-types';
import Link from '@theme/components/Link.vue';
import degaultTagCover from '@theme/assets/images/default-tag-cover.jpg';

export default {
  name: 'Card',
  components: { Link },
  props: {
    info: VueTypes.object.def(() => {}),
  },
  data() {
    return {
      degaultTagCover,
      link: {
        link: this.info.path,
        text: '查看',
      },
    };
  },
};
</script>
