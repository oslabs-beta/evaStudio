const axios = require('axios');

const prometheusController = {};

prometheusController.getPromMetrics = async (req, res, next) => {
  const { urlInput } = req.body;
  try {
    const promQL = `${urlInput}/http_requests_total`;
    await axios.get(promQL)
      .then(promRes => {
        res.locals.promMetrics = promRes;
        console.log(promRes);
        return next();
      })
  } catch (err) {
    return next({
      log: 'An error ocurred in prometheusController.getPromMetrics',
      message: { err: `An error ocurred in prometheusController.getPromMetrics ${err}` },
    })
  }
}

module.exports = prometheusController;