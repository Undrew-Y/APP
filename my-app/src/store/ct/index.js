export default {
    namespaced: true,
    state: {
        ct: "广州",
    },
    mutations: {
        changeCt(state, data) {
            state.ct = data
        }
    },
    actions: {
        changeCt({commit},data){
            commit("changeCt",data)
        }
    }
}