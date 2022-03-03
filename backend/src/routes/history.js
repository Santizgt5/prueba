const express = require("express");
const historyController = require('./../controllers/history_controller');

const router = express.Router();

router.route('/').post(historyController.createHistory).get(historyController.getHistories);

router.route('/:id').get(historyController.getHistory).delete(historyController.deleteHistory);

module.exports = router;