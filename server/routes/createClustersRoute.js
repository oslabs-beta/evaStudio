const express = require('express');
const createClustersController = require('../controllers/createClustersController');
const path = require('path');
const Router = express.Router();

Router.post('/', createClustersController.launchContainers, (req, res) => {
  return res.status(200).zip(path.resolve(__dirname,'../../config/pipeline.zip'));
});

module.exports = Router;