import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import About from './components/about.vue'
import Project from './components/project.vue'
import Photographers from './components/Photographers/Photographers.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component:WelcomePage},
  { path: '/photographers', component: Photographers },
  { path: '/signup', component: SignupPage },
  { path: '/about', component: About }
]

export default new VueRouter({mode: 'history', routes})