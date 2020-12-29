import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Article from './components/Article'
import ArticleList from './components/ArticleList'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
const routes = [
  { name: 'Article', path: '/article/:id', component: Article },
  { name: 'ArticleList', path: '/article-list/:tag', component: ArticleList }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
