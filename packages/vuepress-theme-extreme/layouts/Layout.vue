<template>
  <div class="theme-container">
    <div class="theme-extreme">
      <Page />
    </div>
  </div>
</template>

<script>
import Page from '@theme/components/Page.vue';

export default {
  name: 'Layout',
  components: { Page },
};
</script>
