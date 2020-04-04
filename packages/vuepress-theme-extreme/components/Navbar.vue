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
    <button class="navbar-toggler" type="button">
      Toggle
    </button>
    <div :class="show ? 'navbar-collapse show' : 'navbar-collapse'">
      <ul class="navbar-nav">
        <li v-for="item in userNav" :key="item.link" class="navbar-item">
          <a v-if="item.items" href="">{{ item.text }}</a>
          <NavLink v-else :item="item" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'Navbar',
  components: {
    NavLink,
  },
  data() {
    return { show: false };
  },
  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
  },
};
</script>
