const axios = require('axios');

const prometheusController = {};

prometheusController.getPromMetrics = async (req, res, next) => {
  const { urlInput } = req.body;
  try {
    const promQL = `${urlInput}/api/v1/query?query=http_requests_total`;
    await axios.get(promQL)
      .then(promRes => {
        res.locals.promMetrics = promRes.data;
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