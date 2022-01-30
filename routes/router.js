
const express = require('express');
const router = express.Router();
const actorController = require('../Controllers/actors_controller');

router.post('/actor', actorController.addActor);
router.get('/actor/', actorController.findActors);
router.get('/actor/:id', actorController.findActorById);
router.put('/actor/:id', actorController.updateActor);
router.delete('/actor/:id', actorController.deleteById);

module.exports = router;