const express = require('express');
const createClustersController = require('../controllers/createClustersController');
const Router = express.Router();

Router.post('/', createClustersController.launchContainers, (req, res) => {
  return res.status(200).json('successful run of endpoint');
});

module.exports = Router;