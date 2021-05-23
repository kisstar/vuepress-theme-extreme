<template>
  <ul class="timeline">
    <li class="time-node" v-for="item in pages" :key="item.key" :data-title="item.time">
      <h3>
        <Link :item="item.link" />
      </h3>
      <img v-if="item.thumbnail" :src="item.thumbnail" />
      <p>{{ item.summary || item.excerpt }}</p>
    </li>
  </ul>
</template>

<script>
import Link from '@theme/components/Link.vue';

const getDateStr = date => new Date(date).toLocaleDateString().replace(/\//g, '-');

export default {
  name: 'Timeline',
  components: {
    Link,
  },
  computed: {
    pages() {
      return this.$pagination.pages.map(page => {
        const {
          key,
          frontmatter: { thumbnail, summary, date },
          title,
          excerpt,
          path,
        } = page;

        return {
          key,
          thumbnail,
          summary,
          excerpt,
          link: {
            text: title,
            link: path,
          },
          time: date && getDateStr(date),
        };
      });
    },
  },
};
</script>
