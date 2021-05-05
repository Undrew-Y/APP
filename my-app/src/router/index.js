import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index/home'
        },
        {
            path: '/index',
            component: () => import('@/views/Index'),
            children: [
                {
                    path: 'home',
                    component: () => import('@/views/Index/Home'),
                    redirect: '/index/home/hot',
                    children: [
                        // 热映
                        {
                            path: 'hot',
                            component: () => import('@/views/Index/Home/Hot')
                        },
                        // 即将上映
                        {
                            path: 'comming',
                            component: () => import('@/views/Index/Home/CommingSoon')
                        }
                    ]
                },
                {
                    path: 'cinema',
                    component: () => import('@/views/Index/cinema')
                },
                {
                    path: 'my',
                    component: () => import('@/views/Index/My')
                }
            ]
        },
        {
            path: '/location',
            name: 'location',
            component: () => import('@/views/diqu'),
        },
        {
            path: '/md',
            component: () => import('@/views/MovieDetail')
        },
    ]
})

export default router