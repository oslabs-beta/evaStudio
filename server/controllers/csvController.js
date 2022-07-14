const { parse } = require('csv-parse');

const csvController = {};

csvController.parseUpload = (req, res, next) => {
  const csvFile = req.files[0];
  console.log(csvFile);



  return next();
}


module.exports = csvController;