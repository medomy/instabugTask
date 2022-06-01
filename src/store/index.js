import { createStore } from 'vuex'
import actionTypes from './actionTypes'

const store = createStore({
  state: {
    user : null
  },
  getters: {
  },
  mutations: {
    setUser(state , payload){
      state.user = payload
    }
  },
  actions: {
    setUser({commit} , _user){
      commit(actionTypes.setUser , _user)
    }
  },
  modules: {
  }
})
export default  store