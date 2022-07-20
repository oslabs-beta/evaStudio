const ymlGenerator = require('../../config/ymlGenerator');

const createClustersController = {};

createClustersController.launchContainers = (req, res, next) => {
  const { dataSource, numOfClusters, sink } = req.body;
  try {
    ymlGenerator(numOfClusters, dataSource, sink);
    return next();
  }
  catch (error) {
    return next({
      log: 'Express error handler caught an middleware error at createClustersController.launchContainers middleware',
      status: 500,
      message: { error: `The middleware createClustersController.launchContainers had a problem generating a YML file: ${error}` },
    });
  }
}

module.exports = createClustersController;