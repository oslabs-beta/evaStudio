const express = require('express');
const Router = express.Router();
const prometheusController = require('../controllers/prometheusController');

Router.post('/', prometheusController.getPromMetrics, (req, res) => {
  console.log(res.locals.promMetrics)
  return res.status(200).json(res.locals.promMetrics);
});

module.exports = Router;