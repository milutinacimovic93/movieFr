import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../components/Movies.vue'
import AddMovie from '../components/AddMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/add',
    name: 'Add Movie',
    component: AddMovie
  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
