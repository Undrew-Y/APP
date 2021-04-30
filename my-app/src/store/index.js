import Vue from 'vue'
import Vuex from 'vuex'
import reying from './Reying'
import daiying from './Daiying'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        reying,
        daiying
    },
})