const Actor = require('../Models/actors');


const actorDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateActor: updateActor
}

async function findAll() {
    return Actor().findAll();
}

async function findById(id) {
    return Actor().findOne({where : {id : id}});
     
}

async function deleteById(id) {
    return Actor().destroy({ where: { id: id } });
}

async function create(actor) {
    const newActor = new Actor();
    return newActor.build(actor).save();
}

async function updateActor(actor, id) {
    const updateActor = {
        lastname: actor.lastname,
        firstname: actor.firstname,
    };
    return Actor().update(updateActor, { where: { id: id } });
}
module.exports = actorDao;