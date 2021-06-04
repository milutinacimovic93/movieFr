import baseService from '../services/base.service';

export default class MovieService {

    async getMovies() {
        const response = await baseService.get('/movies');

        return response.data;
    }

    async addMovie(movie) {
        const response = await baseService.post("/movies", movie);
        return response;
      }


}

export const movieService = new MovieService(); 