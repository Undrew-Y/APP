import axios from 'axios'
export default{
    namespaced:true,
    state:{
        data:[]
    },
    mutations:{
        add(state,payload){
            state.reying = payload
        },
    },
    actions:{
        add({commit}){
            axios({
                  url:'/api/mmdb/movie/v7/movie/1351039/celebrities.json',
                  methods:'get',
            }).then(res =>{
              commit('add',res)
            }
            )
         },
    },
}