import axios from 'axios'
export default {
    namespaced:true,
    state:{
        reying:[]
    },
    mutations:{
        add(state,payload){
            state.reying = payload
        }
    },
    actions:{
        add({commit}){
            axios({
                url:'/mmdb/movie/v2/list/hot.json?limit=12&offset=12&ct=广州',
                methods:'GET'
            }).then(res =>{
              commit('add',res.data)
            }
            )
         },
    },
}