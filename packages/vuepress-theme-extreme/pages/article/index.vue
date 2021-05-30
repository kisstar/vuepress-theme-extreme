<template>
  <article class="markdown-body">
    <Content />
    <Edit />
    <Divider />
    <Nav />
    <div class="over-tip">到底了，再怎么滑也没有了 ^_^</div>
  </article>
</template>

<script>
import Divider from '@theme/components/Divider.vue';
import Edit from './Edit.vue';
import Nav from './Nav.vue';

export default {
  name: 'Article',
  components: { Edit, Divider, Nav },
};
</script>
