/**
 * @file 主题的增强文件
 * @description 需要默认导出一个钩子函数，用以增加 Vue 插件、注册全局组件，或者增加额外的路由钩子等
 */

import Swiper from './global-components/swiper/index.jsx';
import '@theme/styles/index.less';

export default ({ Vue }) => {
  Vue.component('Swiper', Swiper);
};
