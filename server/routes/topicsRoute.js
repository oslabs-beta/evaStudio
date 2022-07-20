const express = require('express');
const topicsController = require('../controllers/topicsController');
const messagesController = require('../controllers/messagesController');
const csvController = require('../controllers/csvController');
const Router = express.Router();

// Multer logic below is for uploading csv files from frontend and saving it to be parsed before sending it to Java
// Interestingly, this logic does not seem to function as a middleware, must be in the router
const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, '../uploads');
  },
  filename: (request, file, cb) => {
    cb(null, `File: ${file} at ${Date.now()}`);
  }
});

const multerUpload = multer({ storage: multerStorage });


// Beginning of server routing
// For adding a new topic to Kafka cluster(s) and then returning the newly updated list of topics
Router.post('/add-topic', topicsController.addTopics, topicsController.getAllTopics, (req, res) => {
  return res.status(200).json('placeholder for adding new topics route');
});

// For adding messages to Kafka topics from a csv file
Router.post('/add-messages',
  multerUpload.array('uploaded_csv', 1),
  csvController.parseUpload,
  messagesController.addMessages,
  (req, res) => {
    return res.status(200).json(res.locals.newMessagesData);
  });

// For getting all messages in a topic
Router.get('/:topicName', messagesController.getAllMessages, (req, res) => {
  return res.status(200).json(res.locals.events);
});

// For reading all topics on Kafka clusters
Router.get('/', topicsController.getAllTopics, (req, res) => {
  return res.status(200).json(res.locals.topics);
});

module.exports = Router;