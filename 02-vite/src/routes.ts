import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Users from './pages/Users.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'Accueil' } },
  { path: '/a-propos', component: About, meta: { title: 'A propos' } },
  { path: '/utilisateurs', component: Users, meta: { title: 'Utilisateurs' } },
]

export default routes
