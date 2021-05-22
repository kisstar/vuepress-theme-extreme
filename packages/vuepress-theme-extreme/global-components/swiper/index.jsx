import { filterEmpty } from '@theme/lib/util';
import VueTypes from '@theme/lib/vue-types';

export default {
  name: 'Swiper',
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    autoplay: VueTypes.boolean.def(true),
    timeout: VueTypes.number.def(2000),
  },
  methods: {
    animate() {
      this.timer = setTimeout(this.animateCore, this.timeout);
    },
    animateCore() {
      this.run();
      this.animate();
    },
    run() {
      const { $slots, currentIndex } = this;
      const children = filterEmpty($slots.default);
      const len = children.length;

      if (currentIndex < len - 1) {
        this.currentIndex += 1;
      } else {
        this.currentIndex = 0;
      }
    },
  },
  mounted() {
    if (this.autoplay) {
      this.animate();
    }
  },
  render() {
    const { $slots, currentIndex } = this;
    const children = filterEmpty($slots.default);

    return (
      <div class="swiper">
        <transition name="slide">
          <div class="swiper-item" key={currentIndex}>
            {children[currentIndex]}
          </div>
        </transition>
      </div>
    );
  },
};
