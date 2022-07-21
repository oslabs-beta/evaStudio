const axios = require('axios');
const postgres = require('../models/dataSink');

const messagesController = {};

// Retrieves all messages in a topic in Kafka
messagesController.getAllMessages = async (req, res, next) => {
  const query = 'SELECT timestamp, message FROM datasink.events LIMIT 100;';

  try {
    await postgres.query(query)
      .then(events => {
        res.locals.events = events;
        return next();
      });
  }
  catch (err) {
    return next({
      message: err
    });
  }
}

// Posts messages to a Kafka topic from csv from the frontend using multer\
// Will make request to Java backend
messagesController.addMessages = async (req, res, next) => {
  const kafkaProducerUrl = 'http://localhost:8080/api/v1/kafka/publish';

  res.locals.csvData.forEach(row => {
    const parsedRow = JSON.stringify(row);
    res.locals.newMessagesData = [];

    axios({
      method: 'post',
      url: kafkaProducerUrl,
      headers: { 'Content-Type': 'application/json' },
      data: parsedRow
    })
      .then(newMessagesData => {
        res.locals.newMessagesData.push(newMessagesData);
      })
      .catch(err => {
        return next({
          log: `error: ${err}`,
          status: 500,
          message: 'Error occurred adding messages from csv data in addMessages middleware'
        });
      });
  });

}

module.exports = messagesController;