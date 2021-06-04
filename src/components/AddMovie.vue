<template>
  <div>
    <div class="container">
      <b-form @submit.prevent="addNewMovie">
        <b-form-group
          label="Title:"
          label-for="title"
          description="Title"
        >
          <b-form-input
            id="email"
            v-model="newMovie.title"
            required
            placeholder="Enter movie title"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Director:"
          label-for="director"
          description="Director"
        >
          <b-form-input
            id="director"
            v-model="newMovie.director"
            required
            placeholder="Enter director name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Content:"
          label-for="content"
          description="Content"
        >
          <b-form-input
            id="content"
            v-model="newMovie.content"
            required
            placeholder="Enter Content"
          >
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
    </div>
</template>

<script>
import { movieService } from "../services/MovieService";
export default {
    data() {
        return {
            newMovie: {}
        }
    },
    methods: {
    async  addNewMovie() {
        console.log(this.newMovie);
        await movieService.addMovie(this.newMovie);
        this.$router.push({
            name: 'Movies'
        })
    }
    }
}
</script>

<style>

</style>