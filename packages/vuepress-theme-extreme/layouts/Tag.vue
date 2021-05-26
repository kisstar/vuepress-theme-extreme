<template>
  <div class="article-list-container">
    <h3 class="title">
      {{ $frontmatter.title }}
    </h3>
    <Latest />
  </div>
</template>

<script>
import Latest from '@theme/components/Latest.vue';

export default {
  name: 'Tag',
  components: { Latest },
};
</script>
