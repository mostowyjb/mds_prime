const actorDao = require('../Dao/actors');
var actorController = {
    addActor: addActor,
    findActors: findActors,
    findActorById: findActorById,
    updateActor: updateActor,
    deleteById: deleteById
}

async function addActor(req, res) {
    let actor = req.body;
    console.log('test')
    await actorDao.create(actor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findActorById(req, res) {
    console.log(req.params.id)
   await actorDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function deleteById(req, res) {
    await actorDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Actor deleted successfully",
                actor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function updateActor(req, res) {
    await actorDao.updateActor(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Actor updated successfully",
                actor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findActors(req,res) {
    await actorDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = actorController;