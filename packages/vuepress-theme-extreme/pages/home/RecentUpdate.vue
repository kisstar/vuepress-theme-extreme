<template>
  <div class="recent-update">
    <div class="title">最近更新</div>
    <Timeline />
  </div>
</template>

<script>
import Timeline from '@theme/components/Timeline.vue';

export default {
  name: 'RecentUpdate',
  components: {
    Timeline,
  },
};
</script>
