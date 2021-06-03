<template>
  <article class="markdown-body">
    <Meta v-if="$frontmatter.title" />
    <Content />
    <Edit />
    <Divider />
    <Nav />
    <Comment />
    <div class="over-tip">到底了，再怎么滑也没有了 ^_^</div>
  </article>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components';
import Divider from '@theme/components/Divider.vue';
import Edit from './Edit.vue';
import Nav from './Nav.vue';
import Meta from './Meta.vue';

export default {
  name: 'Article',
  components: { Meta, Edit, Divider, Nav, Comment },
};
</script>
