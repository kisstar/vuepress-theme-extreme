<template>
  <section>
    <h3 class="page-title">
      博文列表
      <div class="btn-group">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          :class="!showTimeline ? 'active' : ''"
          @click="setTimeline(false)"
        >
          <defs><style type="text/css"></style></defs>
          <path
            d="M160 128c-17.728 0-32 14.272-32 32v128c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32v-128c0-17.728-14.272-32-32-32zM192 192h64v64H192z m256 0v64h448V192zM160 384c-17.728 0-32 14.272-32 32v128c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32v-128c0-17.728-14.272-32-32-32zM192 448h64v64H192z m256 0v64h448V448z m-288 192c-17.728 0-32 14.272-32 32v128c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32v-128c0-17.728-14.272-32-32-32z m32 64h64v64H192z m256 0v64h448v-64z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          :class="showTimeline ? 'active' : ''"
          @click="setTimeline(true)"
        >
          <defs><style type="text/css"></style></defs>
          <path
            d="M138 573.8V450.2c48.2-12.1 84-55.8 84-107.7 0-51.9-35.8-95.6-84-107.7V68.1c0-14.9-12.1-27-27-27s-27 12.1-27 27v166.7C35.8 246.9 0 290.6 0 342.5c0 51.9 35.8 95.6 84 107.7v123.7c-48.2 12-84 55.7-84 107.6s35.8 95.6 84 107.7v166.7c0 14.9 12.1 27 27 27s27-12.1 27-27V789.2c48.2-12.1 84-55.8 84-107.7s-35.8-95.6-84-107.7zM60 342.5c0-28.1 22.9-51 51-51s51 22.9 51 51-22.9 51-51 51-51-22.9-51-51z m51 390c-28.1 0-51-22.9-51-51s22.9-51 51-51 51 22.9 51 51-22.9 51-51 51zM942 283H352c-16.6 0-30-13.4-30-30s13.4-30 30-30h590c16.6 0 30 13.4 30 30s-13.4 30-30 30zM771.4 457H347.6c-14.2 0-25.6-11.5-25.6-25.6v-8.7c0-14.2 11.5-25.6 25.6-25.6h423.7c14.2 0 25.6 11.5 25.6 25.6v8.7c0.1 14.1-11.4 25.6-25.5 25.6z"
            fill="currentColor"
          ></path>
          <path
            d="M942 625H352c-16.6 0-30-13.4-30-30s13.4-30 30-30h590c16.6 0 30 13.4 30 30s-13.4 30-30 30zM771.4 799H347.6c-14.2 0-25.6-11.5-25.6-25.6v-8.7c0-14.2 11.5-25.6 25.6-25.6h423.7c14.2 0 25.6 11.5 25.6 25.6v8.7c0.1 14.1-11.4 25.6-25.5 25.6z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </h3>
    <Timeline v-if="showTimeline" />
    <Latest v-else />
    <div class="pagination-container">
      <pagination-core />
    </div>
  </section>
</template>

<script>
import { Pagination as PaginationCore } from '@vuepress/plugin-blog/lib/client/components';
import Timeline from '@theme/components/Timeline.vue';
import Latest from '@theme/components/Latest.vue';

export default {
  name: 'Pagination',
  components: {
    Timeline,
    Latest,
    PaginationCore,
  },
  data() {
    return {
      showTimeline: false,
    };
  },
  methods: {
    setTimeline(val) {
      this.showTimeline = !!val;
    },
  },
};
</script>
