const express = require("express");
const videogameController = require('../controllers/videogame_controller');

const router = express.Router();

router.route('/').post(videogameController.createVideogame).get(videogameController.getVideogames);

router.route('/:id').get(videogameController.getVideogame).delete(videogameController.deleteVideogame);

module.exports = router;