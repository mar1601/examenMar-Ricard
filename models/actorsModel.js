import moviesController from '../controllers/moviesController.js';
import { ManagerFs } from '../managers/manager-fs.js';
import dataMovies from '../share/data-movies.js';

//'./data/actors.json'

class ActorsModel {

    constructor() {
        this.mgfl = new ManagerFs('./data/actors.json');
        this.actors = this.mgfl.getData();

    }
    getActors() {
        return this.actors;
    }
    getActorsById(id) {
        return this.actors.find(element => element.id == id);
    }

    getActorsBy(elem) {
        return this.actors.filter(element => element[elem.key] == elem.value);
    }

    removeActors(id) {
        const index = this.actors.findIndex(element => element.id == id);
        if (index != -1) this.actors.splice(index, 1);
        return index;
    }

    createActors(req) {
        this.actors.push(req);
        return req;
    }

    addActorToMovie(req) {
        //código modificado por Mar
        const index = this.actors.findIndex(element => element.id == req.id);
        if (index != -1) this.actors[index].actors.push(req.value);
    }

    updateActors(req) {
        const actor = this.getActorsBy(req.id);
        if (typeof actor != 'undefined') {
            this.removeActors(req.id);
            this.createActors(req);
        }
        return actor;
    }

    getIDFromActor(req) {
        let movies=[];
        //código modificado por Mar 
    return this.actors.find(element => element.actors.find(element.id == id));
    }
}
 
export default new ActorsModel()