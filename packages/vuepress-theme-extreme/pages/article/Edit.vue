<template>
  <div class="page-edit">
    <div v-if="editLink" class="edit-link">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
    </div>

    <div v-if="lastUpdated" class="last-updated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
  </div>
</template>

<script>
import isNil from 'lodash/isNil';
import { endingSlashRE, outboundRE } from '@theme/lib/util';

export default {
  name: 'PageEdit',
  computed: {
    lastUpdated() {
      return this.$page.lastUpdated;
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated;
      }

      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated;
      }

      return 'Last Updated';
    },
    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink;
      const { repo, docsDir = '', docsBranch = 'master', docsRepo = repo } = this.$site.themeConfig;

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath);
      }

      return false;
    },
    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    },
  },
  methods: {
    createEditLink(_repo, docsRepo, docsDir, docsBranch, path) {
      const base = outboundRE.test(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`;

      return (
        `${base.replace(endingSlashRE, '')}/edit` +
        `/${docsBranch}/${docsDir ? `${docsDir.replace(endingSlashRE, '')}/` : ''}${path}`
      );
    },
  },
};
</script>
