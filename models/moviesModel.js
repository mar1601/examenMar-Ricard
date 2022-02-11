import { ManagerFs } from '../managers/manager-fs.js';

//'./data/movies.json'

class MoviesModel {

    constructor() {
        this.mgfl = new ManagerFs('./data/movies.json');
        this.movies = this.mgfl.getData();

    }

    getMovies() {
        return this.movies;
    }
    getMovieById(id) {
        return this.movies.find(element => element.id == id);
    }

    getMovieBy(elem) {
        return this.movies.filter(element => element[elem.key] == elem.value);
    }

    removeMovie(id) {
        const index = this.movies.findIndex(element => element.id == id);
        if (index != -1) this.movies.splice(index, 1);
        return index;
    }

    createMovie(req) {
        this.movies.push(req);
        return req;
    }
    
    updateMovie(req) {
        const movie = this.getMovieById(req.id);
        if (typeof movie != 'undefined') {
            this.removeMovie(req.id);
            this.createMovie(req);
        }
        return movie;
    }
   
}

export default new MoviesModel()