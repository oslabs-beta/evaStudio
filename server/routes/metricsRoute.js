const express = require('express');
const Router = express.Router();
const prometheusController = require('../controllers/prometheusController');
const consumersController = require('../controllers/consumersController');
const overviewController = require('../controllers/overviewController');
const producersController = require('../controllers/producersController');
const topicsController = require('../controllers/topicsController');
const zookeeperController = require('../controllers/zookeeperController');

Router.post('/', prometheusController.getPromMetrics, (req, res) => {
  console.log(res.locals.promMetrics)
  return res.status(200).json(res.locals.promMetrics);
});

module.exports = Router;