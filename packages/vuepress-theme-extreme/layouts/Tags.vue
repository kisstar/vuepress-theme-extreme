<template>
  <div class="container">
    <h3 class="title">Tags</h3>
    <template v-for="(item, idx) in tagList">
      <div class="row" :key="idx">
        <div class="col-12 col-lg-4" v-for="oItem in item" :key="oItem.name">
          <Card :info="oItem" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Card from '@theme/components/Card.vue';

export default {
  name: 'Tags',
  components: { Card },
  computed: {
    tagList() {
      const {
        $frontmatterKey: { list = [] },
        $themeConfig: { tags = {} },
      } = this;
      const retList = [];
      const tempList = list.map(item => {
        const { name, pages, path } = item;
        const config = tags[name] || {};
        const { cover, des } = config;

        return {
          name,
          path,
          cover,
          length: pages.length,
          des,
        };
      });

      for (let i = 0; i < tempList.length; i += 3) {
        retList.push(tempList.slice(i, i + 3));
      }

      return retList;
    },
  },
};
</script>
