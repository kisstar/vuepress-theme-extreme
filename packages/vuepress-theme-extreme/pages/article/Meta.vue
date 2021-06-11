<template>
  <div class="post-meta">
    <h1>{{ title }}</h1>
    <div v-if="author" class="post-meta-author">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
      </svg>
      <span>{{ author }}</span>
      <span v-if="location">{{ `&nbsp;在${location}` }}</span>
    </div>
    <div v-if="date" class="post-meta-date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <time v-if="date" pubdate :datetime="date">
        {{ resolvedDate }}
      </time>
    </div>
    <ul v-if="resolvedTags" class="post-meta-tags">
      <Tag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
  </div>
</template>

<script>
import { transformer } from '@theme/lib/util';
import Tag from './Tag.vue';

export default {
  name: 'PostMeta',
  components: { Tag },
  computed: {
    title() {
      return this.$frontmatter.title;
    },
    location() {
      return this.$frontmatter.location;
    },
    author() {
      return this.$frontmatter.author;
    },
    date() {
      return this.$frontmatter.date;
    },
    resolvedDate() {
      return transformer(this.date).replace(/\s+.*/, '');
    },
    resolvedTags() {
      const { tags } = this.$frontmatter;

      if (!tags || Array.isArray(tags)) return tags;

      return [tags];
    },
  },
};
</script>
