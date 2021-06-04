<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <h1>Title: {{ movie.title }}</h1>
      <h2>Director: {{ movie.director}}</h2>
      <h3>Content: {{ movie.content }}</h3>
      <hr />
    </div>
  </div>
</template>

<script>
import { movieService } from "../services/MovieService";
export default {
  data() {
    return {
      movies: {},
    };
  },
  async created() {
    this.movies = await movieService.getMovies();
  },
};
</script>

<style scoped></style>