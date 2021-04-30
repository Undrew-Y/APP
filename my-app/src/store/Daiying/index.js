import axios from 'axios'
export default {
    namespaced:true,
    state:{
        datas:[]
    },
    mutations:{
        add(state,payload){
            state.datas = payload
        }
    },
    actions:{
        add({commit}){
           axios({
               url:'',
               type:'GET'
           }).then(res =>{
             commit('add',res.data)
           }
           )
        },
    },
}