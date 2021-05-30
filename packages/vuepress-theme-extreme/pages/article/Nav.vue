<template>
  <div v-if="prev || next" class="page-nav">
    <div v-if="prev" class="prev">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
      >
        <path
          d="M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z"
          fill="currentColor"
        ></path>
      </svg>
      <Link :item="prev" />
    </div>
    <div v-if="next" class="next">
      <Link :item="next" />
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
      >
        <path
          d="M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import isString from 'lodash/isString';
import isNil from 'lodash/isNil';
import Link from '@theme/components/Link.vue';

function find(page, items, offset) {
  for (let i = 0; i < items.length; i += 1) {
    const cur = items[i];

    if (cur.id === 'post' && cur.path === decodeURIComponent(page.path)) {
      return items[i + offset];
    }
  }

  return null;
}

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next,
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev,
  },
};

function resolvePageLink(linkType, { $themeConfig, $site, $page }) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType;
  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig);
  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page);
  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig;

  if (link === false) {
    return null; // 什么也不必做
  }
  if (isString(link)) {
    return null; // 暂不支持指定页面
  }

  return resolveLink($page, $site.pages);
}

export default {
  name: 'PageNav',
  components: {
    Link,
  },
  computed: {
    prev() {
      const pre = resolvePageLink(LINK_TYPES.PREV, this);

      if (!pre || pre.pid !== 'post') {
        return null;
      }

      return {
        text: pre.title,
        link: pre.path,
      };
    },
    next() {
      const next = resolvePageLink(LINK_TYPES.NEXT, this);

      if (!next || next.pid !== 'post') {
        return null;
      }

      return {
        text: next.title,
        link: next.path,
      };
    },
  },
};
</script>
