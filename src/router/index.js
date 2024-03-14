import { createRouter, createWebHistory } from 'vue-router'
import layout from "@/layout/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:layout,
      children:[
        {
          path:"myday",
          name:"myday",
          component:()=>import('@/views/MyDay/index.vue')
        },
        {
          path:"important",
          name:"important",
          component:()=>import('@/views/Important/index.vue')
        },
        {
          path:"planned",
          name:"planned",
          component:()=>import('@/views/Planned/index.vue')
        },
        {
          path:"inbox",
          name:"inbox",
          component:()=>import('@/views/Inbox/index.vue')
        }
      ]
    }
  ]
})

export default router
