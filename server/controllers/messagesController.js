const axios = require('axios');

const messagesController = {};

// Retrieves all messages in a topic in Kafka
messagesController.getAllMessages = (req, res, next) => {
  return next();
}

// Posts messages to a Kafka topic from csv from the frontend using multer\
// Will make request to Java backend
messagesController.addMessages = async (req, res, next) => {
  const parsedCsv = JSON.stringify(res.locals.csvData); // Java is awaiting a JSON object

  const kafkaProducer = 'http://localhost:8080/api/v1/kafka/publish';
  axios.post(kafkaProducer, parsedCsv)
    .then(newMessagesData => {
      res.locals.newMessagesData = newMessagesData
      return next();
    })
    .catch(err => {
      return next({
        log: 'Error occurred making async request to Java backend',
        status: 500,
        message: err,
      });
    });
}

module.exports = messagesController;