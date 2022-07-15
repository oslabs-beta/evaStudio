const express = require('express');
const createClustersController = require('../controllers/createClustersController');
const path = require('path');
const Router = express.Router();

Router.post('/', createClustersController.launchContainers, (req, res) => {
  return res.status(200).download(path.resolve(__dirname,'../../config/docker/docker-compose.yml'), 'docker-compose.yml');
});

module.exports = Router;