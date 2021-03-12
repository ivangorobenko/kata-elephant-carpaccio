exports.order = function order(req, res, next) {
  console.log(req);
  res.json({ total: 0.0 });
}

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
}
