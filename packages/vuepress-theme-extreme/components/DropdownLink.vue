<template>
  <div class="frament">
    <button ref="toggleButton" :class="['dropdown-toggle', open ? 'open' : '']" @click="toggleOpen">
      {{ item.text }}
    </button>
    <ul :class="['dropdown-menu', open ? 'open' : '']">
      <li class="dropdown-item" v-for="subItem in item.items" :key="subItem.link">
        <h4 v-if="subItem.items" class="group-name">{{ subItem.text }}</h4>
        <template v-if="subItem.items">
          <NavLink
            v-for="subChild in subItem.items"
            :key="subChild.link"
            :item="subChild"
            class="dropdown-link"
          />
        </template>
        <NavLink v-else :item="subItem" class="dropdown-link" />
      </li>
    </ul>
  </div>
</template>

<script>
import VueTypes from '../lib/vue-types';
import NavLink from './NavLink.vue';

export default {
  name: 'DropdownLink',
  components: { NavLink },
  props: {
    item: VueTypes.object.def(() => {}),
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    closeDropdownMenu(e) {
      if (e.target === this.$refs.toggleButton) return;

      this.open = false;
    },
  },
  mounted() {
    window.addEventListener('click', this.closeDropdownMenu);
  },
  destroyed() {
    window.removeEventListener('click', this.closeDropdownMenu);
  },
};
</script>
