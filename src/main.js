import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import VueVirtualScroller from 'vue-virtual-scroller'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSortAmountUp,
  faSortAmountDown,
  faSort,
  faFilter,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VTooltipPlugin from 'v-tooltip'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
library.add(faSortAmountUp, faSortAmountDown, faSort, faFilter, faTimes);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {Directive} from "./directives/detect-viewport";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueVirtualScroller)
Vue.use(VTooltipPlugin);

Vue.directive(`detect-viewport`, Directive);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  // vuetify,
  render: h => h(App),
}).$mount('#app')
