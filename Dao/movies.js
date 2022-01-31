const Movie = require('../Models/movies');
const ActorMovie = require('../Models/movies_actors');


const movieDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMovie: updateMovie
}

async function findAll() {
    return Movie().findAll();
}

async function findById(id) {
    const movie = await Movie().findOne({where : {id : id}});
    const actors = await ActorMovie().findAll({where : {id_movies : id}})
    movie.actors = actors
    return {movie,actors}
}

async function deleteById(id) {
    const deleteactors = await ActorMovie().destroy({where : {id_movies : id}})
    return Movie().destroy({ where: { id: id } });
}

async function create(mv) {
    const movie = new Movie();
    const newMovie = {
        name : mv.name ,
        synopsis : mv.synopsis,
        realisator : mv.realisator

    }

    const test = await movie.build(mv).save();
    mv.id_actors.forEach(function(item){
        let actorMvie = new ActorMovie();
        actorMvie.build({id_movies: test.dataValues.id , id_actors: item}).save();
    });
    console.log(test.dataValues.id)
    return test
}

async function updateMovie(mv, id) {
    const updateMovie = {
        name : mv.name ,
        synopsis : mv.synopsis,
        realisator : mv.realisator
    };
    if(mv.id_actors)
    {
        mv.id_actors.forEach(function(item){
            let actorMvie = new ActorMovie();
            let am =  actorMvie.build({id_movies: id , id_actors: item}).save();
        });
    }
    return Movie().update(updateMovie, { where: { id: id } });
}

module.exports = movieDao;