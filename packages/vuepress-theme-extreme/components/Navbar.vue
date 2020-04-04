<template>
  <header class="navbar">
    <RouterLink :to="$localePath" class="navbar-brand">
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span v-if="$siteTitle">{{ $siteTitle }}</span>
    </RouterLink>
    <button class="navbar-toggler" type="button" @click="toggleShow">
      Toggle
    </button>
    <div :class="show ? 'navbar-collapse show' : 'navbar-collapse'">
      <ul class="navbar-nav">
        <li
          v-for="item in userNav"
          :key="item.link"
          :class="['navbar-item', item.items ? 'dropdown' : '']"
        >
          <DropdownLink v-if="item.items" :item="item" />
          <NavLink v-else :item="item" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import NavLink from './NavLink.vue';
import DropdownLink from './DropdownLink.vue';

export default {
  name: 'Navbar',
  components: {
    NavLink,
    DropdownLink,
  },
  data() {
    return { show: false };
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
  },
};
</script>
