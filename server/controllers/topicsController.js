const axios = require('axios');
const topicsController = {};

// For getting all topics that currently exist on Kafka clusters
topicsController.getAllTopics = async (req, res, next) => {
  const { topicName } = req.body;

  const readTopicsUrl = 'http://localhost:8080/api/v1';
  axios.post(readTopicsUrl, topicName)
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