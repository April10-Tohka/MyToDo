import { createRouter, createWebHistory } from 'vue-router'
import layout from "@/layout/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:layout
    }
  ]
})

export default router
