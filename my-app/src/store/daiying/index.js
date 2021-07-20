import axios from 'axios'
export default {
    namespaced:true,
    state:{
        datas:[],
        banner:[]
    },
    mutations:{
        add(state,payload){
            state.datas = payload.data.coming
        },
        add2(state,payload){
            state.banner = payload.data.data.coming
        }
    },
    actions:{
        add({commit}){
           axios({
               url:'/api/mmdb/movie/v2/list/rt/order/coming.json?ci=20&limit=10',
               type:'GET'
           }).then(res =>{
             commit('add',res.data)
           }
           )
        },
        add2({commit}){
            axios({
                url:'/api/mmdb/movie/v1/list/wish/order/coming.json?ci=20&limit=30&offset=0',
                type:'GET'
            }).then(res =>{
              commit('add2',res)
            }
            )
         },
    },
}