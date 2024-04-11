import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import Checkout from '@/views/Checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/:lang/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:lang/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/:lang/rent',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:lang/checkout',
      name: 'checkout',
      component: Checkout
    },
  ]
})

export default router
