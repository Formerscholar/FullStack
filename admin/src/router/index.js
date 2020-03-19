import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

const CategoryEdit = () => import("../views/CategoryEdit.vue")

const CategoryList = () => import("../views/CategoryList.vue")

const ItemEdit = () => import("../views/ItemEdit.vue")

const ItemList = () => import("../views/ItemList.vue")

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
      path: '/categories/create',
      component: CategoryEdit
    },
    {
      path: '/categories/edit/:id',
      component: CategoryEdit,
      props: true
    },
    {
      path: '/categories/list',
      component: CategoryList
    },


    {
      path: '/items/create',
      component: ItemEdit
    },
    {
      path: '/items/edit/:id',
      component: ItemEdit,
      props: true
    },
    {
      path: '/items/list',
      component: ItemList
    }
  ]
}]

const router = new VueRouter({
  routes
})

export default router