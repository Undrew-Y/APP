import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import daiying from './daiying'
import reying from './reying'
import xiangqy from './xiangqy'
import ct from './ct'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        daiying,
        reying,
        xiangqy,
        ct
    }
})