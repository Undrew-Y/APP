import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    linkExactActiveClass:'act',
    routes:[
        { path:'/',redirect:'/dianying'},
        { path:'/dianying',component:()=>import('@/components/Dianying.vue'),
         children:[
             { path:'/dianying',redirect:'/dianying/reying'},
             { path:'daiying',component:()=>import('@/components/Dianying/Daiying.vue')},
             { path:'reying',component:()=>import('@/components/Dianying/Reying.vue' )}
         ]
        },  
       { path:'/yingyuan',component:()=>import('@/components/Yingyuan.vue')},
       { path:'/wode',component:()=>import('@/components/Wode.vue')},
    ]
})
export default router