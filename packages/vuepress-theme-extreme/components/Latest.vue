<template>
  <ul class="latest">
    <li class="latest-item" v-for="item in pages" :key="item.key">
      <img class="thumbnail" v-if="item.thumbnail" :src="$withBase(item.thumbnail)" />
      <div class="content">
        <h3 class="title">
          <Link :item="item.link" />
        </h3>
        <p class="excerpt" v-html="item.summary || item.excerpt"></p>
        <p class="time">
          <svg
            v-if="item.author || item.time"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clock"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {{ item.author }} {{ item.time ? '发表于' + item.time : '' }}
          <svg
            v-if="item.tags.length"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-tag"
          >
            <path
              d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
            ></path>
            <line x1="7" y1="7" x2="7" y2="7"></line>
          </svg>
          <Link v-for="oItem in item.tags" :key="oItem.text" :item="oItem" />
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import Link from '@theme/components/Link.vue';

const getDateStr = date => new Date(date).toLocaleDateString().replace(/\//g, '-');
const getTagList = tagName => ({ text: tagName, link: `/tag/${tagName}` });

export default {
  name: 'Latest',
  components: {
    Link,
  },
  computed: {
    pages() {
      return this.$pagination.pages.map(page => {
        const {
          key,
          frontmatter: { thumbnail, summary, author, date, tags = [] },
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
          author,
          time: date && getDateStr(date),
          tags: tags.map(getTagList),
        };
      });
    },
  },
};
</script>
