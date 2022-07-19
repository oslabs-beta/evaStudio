const axios = require('axios');
const messagesController = {};

// Retrieves all messages in a topic in Kafka
messagesController.getAllMessages = (req, res, next) => {
  const { topicName } = req.params;
  console.log(topicName);
  return next();
}

// Posts messages to a Kafka topic from csv from the frontend using multer\
// Will make request to Java backend
messagesController.addMessages = async (req, res, next) => {
  const kafkaProducerUrl = 'http://localhost:8080/api/v1/kafka/publish';

  res.locals.csvData.forEach(row => {
    const parsedRow = JSON.stringify(row);
    res.locals.newMessagesData = [];

    axios.post(kafkaProducerUrl, parsedRow)
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