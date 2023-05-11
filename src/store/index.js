import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'a3d6989298145a295df2fb4735b1535c'

export default new Vuex.Store({
  state: {
    movies: [],
    watchMovieList:[]
  },
  getters: {
  },
  mutations: {
    GET_MOVIES(state,data) {
      state.movies = data
    },
    ADD_MOVIE(state,data) {
      state.watchMovieList?.push(data)
    }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KO&page=1`
      })
      .then((res)=>{
        // console.log(res)
        context.commit('GET_MOVIES',res.data.results)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    addMovie(context,movie) {
      context.commit('ADD_MOVIE',movie)
      context.dispatch('saveMovieToLocal')
    },
    saveMovieToLocal(context) {
      const jsonMovieList = JSON.stringify(context.state.watchMovieList)
      localStorage.setItem('wantToWatch',jsonMovieList)
    }
  },
  modules: {
  }
})
