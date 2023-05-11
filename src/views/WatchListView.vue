<template>
    <div>
      <h1>보고싶은 영화</h1>
      <form @submit.prevent="addMovie">
        <input type="text" v-model.trim="wantToWatch">
        <input type="submit" value="Add">
      </form>
      <WatchListItem v-for="(item,index) in wantToWatchs" :key="index" :movie="item"/>
    </div>
  </template>
  
  <script>
  import WatchListItem from '@/components/WatchListItem.vue'

  export default {
    name: 'WatchListview',
    components: {
      WatchListItem
    },
    data() {
      return {
        wantToWatch: ''
      }
    },
    methods: {
      addMovie() {
        if (this.wantToWatch){
          this.$store.dispatch('addMovie',this.wantToWatch)
        } else {
          alert('내용을 입력해야겠죠?')
        }
        this.wantToWatch = null
      }
    },
    computed: {
      wantToWatchs() {
        return this.$store.state.watchMovieList
      }
    },
    created() {
      const localStorageMovies = localStorage.getItem('wantToWatch')
      const parsedMovies = JSON.parse(localStorageMovies)
      if (parsedMovies !== null) {
        this.$store.state.watchMovieList = parsedMovies
      }
    }
  }
  </script>
  
  <style>
  
  </style>