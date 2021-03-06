var process = require('../lib/process');

exports.order = function order(req, res, next) {
    console.log(req.body);
    const total = process.order(req.body)
    if (total===undefined) res.sendStatus(404)
    res.json(total);
}

exports.feedback = function feedback(req, res, next) {
    console.info("FEEDBACK:", req.body.type, req.body.content);
    next();
}
