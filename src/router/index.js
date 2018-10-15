import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Category from '@/views/Category.vue'
import Search from '@/views/Search.vue'
import SearchList from '@/views/SearchList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchList',
      name: 'SearchList',
      component: SearchList
    }
  ],
  linkActiveClass: 'isActive'
})
