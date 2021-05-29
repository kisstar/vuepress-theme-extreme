<template>
  <article class="markdown-body">
    <Content />
    <Edit />
    <div class="over-tip">到底了，再怎么滑也没有了 ^_^</div>
  </article>
</template>

<script>
import Edit from './Edit.vue';

export default {
  name: 'Article',
  components: { Edit },
};
</script>
