<template>
  <div class="recent-update">
    <div class="title">最近更新</div>
    <Latest />
  </div>
</template>

<script>
import Latest from '@theme/components/Latest.vue';

export default {
  name: 'RecentUpdate',
  components: {
    Latest,
  },
};
</script>
