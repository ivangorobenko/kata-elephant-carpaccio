var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload, callback)', function () {
  it('calls back with an empty object', function (done) {
    process.order({}, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({});
      done();
    })
  })
  it('doit renvoyer le total de 19.03 pour la commande {"prices":[15.99],"quantities":[1],"country":"ES","reduction":"STANDARD"} ', function (done) {
    process.order({"prices":[15.99],"quantities":[1],"country":"ES","reduction":"STANDARD"}, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({total: 19.03});
      done();
    })
  })
})
