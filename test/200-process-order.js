var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload)', function () {
    it('calls back with an empty object', function (done) {
        const result = process.order({})
        expect(result).to.deep.equal({});
    })
    it('doit renvoyer le total de 19.03 pour la commande {"prices":[15.99],"quantities":[1],"country":"NL","reduction":"STANDARD"} ', function () {
        const result = process.order({
            "prices": [89.3, 34.99],
            "quantities": [8, 10],
            "country": "UK",
            "reduction": "STANDARD"
        });
        console.log(result)
        expect(result).to.deep.equal({total: 1287.80});
    })
})
