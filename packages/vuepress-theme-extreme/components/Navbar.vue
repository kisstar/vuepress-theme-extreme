<template>
  <header class="navbar fixed">
    <a :href="rootNav" class="navbar-brand">
      <img class="logo" :src="$withBase($site.themeConfig.logo || logo)" :alt="$siteTitle" />
      <span v-if="$siteTitle">{{ $siteTitle }}</span>
    </a>
    <button class="navbar-toggler" type="button" @click="toggleShow">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="48"
        height="36"
      >
        <path
          d="M128 469.333333m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533334l0 4.266666q0 40.533333-40.533333 40.533334l-686.933334 0q-40.533333 0-40.533333-40.533334l0-4.266666q0-40.533333 40.533333-40.533334Z"
          fill="#D0D0D0"
        ></path>
        <path
          d="M128 682.666667m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z"
          fill="#D0D0D0"
        ></path>
        <path
          d="M128 256m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z"
          fill="#D0D0D0"
        ></path>
      </svg>
    </button>
    <div :class="show ? 'navbar-collapse show' : 'navbar-collapse'">
      <ul class="navbar-nav">
        <li
          v-for="item in userNav"
          :key="item.link"
          :class="['navbar-item', item.items ? 'dropdown' : '']"
        >
          <DropdownLink v-if="item.items" :item="item" />
          <Link v-else :item="item" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import logo from '@theme/assets/logo.png';
import Link from '@theme/components/Link.vue';
import DropdownLink from '@theme/components/DropdownLink.vue';

export default {
  name: 'Navbar',
  components: {
    Link,
    DropdownLink,
  },
  data() {
    return {
      show: false,
      logo,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    rootNav() {
      let baseURL = this.$site.themeConfig.base || '';
      let localePath = this.$localePath || '';

      if (baseURL.slice(-1) === '/') {
        baseURL = baseURL.slice(0, -1);
      }
      if (localePath[0] === '/') {
        localePath = localePath.slice(1);
      }

      return `${baseURL}/${localePath}`;
    },
  },
};
</script>
