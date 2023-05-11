<template>
  <div class="card" style="width: 18rem;">
    <img :src="posterUrl" class="card-img-top" :alt="movie.poster_path">
    <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {
        posterUrl: `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    }
  },
  props: {
    movie: Object,
  }
}
</script>

<style>
.card {
    margin: 10px 3px;
}
</style>