import axios from 'axios'
export default {
    namespaced:true,
    state:{
        reying:[],
    },
    mutations:{
        add(state,payload){
            state.reying = payload.data.data.hot
        },
    },
    actions:{
        add({commit},data){
            axios({
                  url:`/api/mmdb/movie/v2/list/hot.json?limit=${data.lit?data.lit:12}&offset=0&ct=${data.ct?data.ct:'广州'}`,
                  methods:'get',
            }).then(res =>{
              commit('add',res)
            }
            )
         },
    },
}