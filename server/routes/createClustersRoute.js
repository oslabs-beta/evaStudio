const express = require('express');
const createClustersController = require('../controllers/createClustersController');
const path = require('path');
const Router = express.Router();

Router.post('/', createClustersController.launchContainers, (req, res) => {
  return res.status(200).download(path.resolve(__dirname,'../../config/pipeline.zip'), 'pipeline.zip');
});

module.exports = Router;