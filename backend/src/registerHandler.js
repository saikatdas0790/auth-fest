const handler = (req, res, next) => {
  console.log(req.body);
  next();
};

module.exports = handler;
