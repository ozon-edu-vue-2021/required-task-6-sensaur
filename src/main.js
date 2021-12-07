import Vue from 'vue'
import App from './App.vue'

import {
    faSortAmountUp,
    faSortAmountDown,
    faSort,
    faFilter,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {Directive} from '@/directives/detect-viewport';

import VueRouter from 'vue-router'
import {library} from '@fortawesome/fontawesome-svg-core';
import Sorting from "./components/with-sort"
import Home from "./components/Home";
import WithPaging from "./components/with-paging";
import Scroll from "./components/scroll";
import VTooltipPlugin from 'v-tooltip'

Vue.use(VueRouter);
Vue.use(VTooltipPlugin);

library.add(faSortAmountUp, faSortAmountDown, faSort, faFilter, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.directive('detect-viewport', Directive);

Vue.config.productionTip = false
const routes = [
    {path: '/Sorting', component: Sorting},
    {path: '/', component: Home},
    {path: '/pagination', component: WithPaging},
    {path: '/scroll', component: Scroll}
]

const router = new VueRouter({
    routes,
    mode: "history"
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
