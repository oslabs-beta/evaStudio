const express = require('express');
const Router = express.Router();
const prometheusController = require('../controllers/prometheusController');

Router.get('/', prometheusController.getPromMetrics, (req, res) => {
  return res.status(200).json(res.locals.promMetrics);
});

module.exports = Router;