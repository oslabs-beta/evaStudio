const ymlGenerator = require('../../config/ymlGenerator');
const path = require('path');
const zipper = require('zip-local');
const { execSync } = require('node:child_process');

const createClustersController = {};

createClustersController.launchContainers = (req, res, next) => {
  const { dataSource, numOfClusters, sink } = req.body;
  try {
    ymlGenerator(numOfClusters, dataSource, sink);
    zipper.sync.zip(path.join(__dirname,'../../config/download/')).compress().save(path.join(__dirname,'../../config/download/pipeline.zip'));
    const pathDocker = path.join(__dirname, '../../config/download/docker-compose.yml');
    execSync(`docker compose -p evastudio -f ${pathDocker} up -d`);
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