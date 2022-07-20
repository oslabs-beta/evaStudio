const axios = require('axios');
const postgres = require('../models/dataSink');

const topicsController = {};

// For getting all topics that currently exist on Kafka clusters
topicsController.getAllTopics = async (req, res, next) => {
  const query = 'SELECT * FROM topics';

  try {
    await postgres.query(query)
      .then(topics => {
        res.locals.topics = topics;
        return next();
      });
  }
  catch (err) {
    return next({
      message: err
    });
  }
}


// For adding a topic to Kafka clusters
topicsController.addTopics = async (req, res, next) => {
  const { topicName } = req.body;

  const addTopicsUrl = 'http://localhost:8080/api/v1';
  axios.post(addTopicsUrl, topicName)
    .then(() => {
      return next();
    })
    .catch(err => {
      return next({
        log: 'Error occurred making async request to Java backend',
        status: 500,
        message: err
      });
    });
}


module.exports = topicsController;