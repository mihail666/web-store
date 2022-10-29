import { createStore } from "vuex"
import axios from "axios"

export default createStore({
  state: {
    posts: []
  },
  getters: {
    POSTS(state) {
      return state.posts
    }
  },
  actions: {
    GET_POSTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/cars', {
        method: 'GET'
      })
        .then((posts) => {
          commit('SET_POSTS_TO_STATE', posts.data)
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    }
  },
  mutations: {
    SET_POSTS_TO_STATE: (state, posts) => {
      state.posts = posts;
    }
  }
})