const messagesController = {};

// Retrieves all messages in a topic in Kafka
messagesController.getAllMessages = (req, res, next) => {
  return next();
}

// Posts messages to a Kafka topic from csv from the frontend using multer\
// Will make request to Java backend
messagesController.addMessages = (req, res, next) => {
  return next();
}

module.exports = messagesController;