import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import system from './modules/system'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations,
    actions,
    getters,
    modules: {
        system
    }
})
