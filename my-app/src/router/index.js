import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    linkExactActiveClass:'act',
    routes:[
        { path:'/daiying',component:()=>import('@/components/Daiying.vue')},
        { path:'/reying',component:()=>import('@/components/Reying.vue')}
    ]
})
export default router