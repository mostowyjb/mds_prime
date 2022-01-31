const ActorMovie = require('../Models/movies_actors');


const actorMovieDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateActor: updateActor
}

async function findAll() {
    return ActorMovie().findAll();
}

async function findById(id) {
    return ActorMovie().findOne({where : {id_movie : id}});
     
}




module.exports = actorMovieDao;