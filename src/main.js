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
import VueRouter from 'vue-router'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
library.add(faSortAmountUp, faSortAmountDown, faSort, faFilter, faTimes);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {Directive} from "./directives/detect-viewport";
// import VirtalScrollWrapper from "./components/virtual-scroll";
// import Pagination from "./components/with-paging"
import Sorting from "./components/with-sort"
import Home from "./components/Home";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueVirtualScroller)
Vue.use(VTooltipPlugin);
Vue.use(VueRouter)

Vue.directive(`detect-viewport`, Directive);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const routes = [
  // { path: '/VirtalScrollWrapper', component: VirtalScrollWrapper },
  // { path: '/Pagination', component: Pagination },
  { path: '/Sorting', component: Sorting },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
