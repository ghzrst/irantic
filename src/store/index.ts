import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        message: '',
        hasNotif: false
    },
    mutations: {
        setNotifData(state, data) {
            state.status = data.status
            state.message = data.message

        },
        showNotif(state, status) {
            state.hasNotif = status
            console.log(state.hasNotif);
            
        },
    },
    getters: {
        hasNotifData: state => {
            return state.hasNotif
        }
    }


})