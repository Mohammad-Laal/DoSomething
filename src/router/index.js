import { createRouter, createWebHistory } from 'vue-router'


// import NewTask from '../views/NewTask.vue'
import TaskList from '../views/TaskList.vue'
import DoneTask from '../views/DoneTask.vue'

const routes = [


   {

   path:'/TaskList',
   name : 'TaskList',
   component:TaskList

   },
   
   {

    path:'/',
    name:'newtask',
    component:()=>import('../views/NewTask')
    
   },

   {
    
    path:'/donetask',
    name : 'DoneTask',
    component:DoneTask

   } ,

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },

  // { // redirect

  //   path:'/detailee',  
  //   redirect : '/TaskList'
 
  //  },
  
  // {   //not found

  //  path:'/:catchAll(.*)',
  //  name : 'NotFound',
  //  component:()=>import('../views/NewTask.vue')
  // },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
