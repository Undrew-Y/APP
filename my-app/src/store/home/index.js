export default {
    namespaced: true,
    state: {
        title: '猫眼电影',
        cityName: '广州',
        // 返回按钮信息
        backInfo: {
            hasBack: false,   // 是否有返回按钮
            to: ''  // 返回的路径
        }
    },
    mutations: {
        // 设置title信息
        setTitle(state, val) {
            state.title = val
        }
    },
    actions: {
        setTitle({ commit }, val) {
            commit('setTitle', val)
        }
    }
}