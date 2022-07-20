const { data } = require('autoprefixer');
const { parse } = require('csv-parse');
const fs = require('fs');

const csvController = {};

csvController.parseUpload = (req, res, next) => {
  const csvFile = req.files[0]; // the actual file of csv events brought in by multer
  const csvData = [];

  fs.createReadStream(csvFile.path) // read the file with Node at the path of the data
    .pipe(
      parse({ // use the csv-parse library to push each row of data in the file to array
        delimiter: ','
      })
    )
    .on('data', (dataRow) => {
      const eventObj = {
        timestamp: dataRow[0],
        message: dataRow[1]
      }
      csvData.push(eventObj);
    })
    .on('end', () => {
      res.locals.csvData = csvData;
      return next();
    });
}

module.exports = csvController;