const collectInfo = (req, __res, next) => {
  const {message, name} = req.body;
  const time = new Date();

  req.logInfo = {message, name, time};

  next();
};

module.exports = {
  collectInfo,
};
