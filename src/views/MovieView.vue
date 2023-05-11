<template>
  <div class="movie-container">
    <h1>this in MovieView</h1>
    <div class="card-container">
        <MovieCard v-for="(movie,index) in movies" :key="index" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Movieview',
  components: {
    MovieCard
  },
  data() {
    return {
    }
  },
  methods: {
    getMovies() {
        this.$store.dispatch('getMovies')
    }
  },
  computed :{
    movies() {
        return this.$store.state.movies
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>
.movie-container {
    display: flex;
    flex-direction: column;
}
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 20px;
}
</style>