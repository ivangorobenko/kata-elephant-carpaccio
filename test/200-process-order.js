var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload)', function () {
    it('calls back with an empty object', function (done) {
        const result = process.order({})
        expect(result).to.deep.equal(undefined);
    })
    it('doit renvoyer le total de 19.03 pour la commande {"prices":[15.99],"quantities":[1],"country":"NL","reduction":"STANDARD"} ', function () {
        const result = process.order({
            "prices": [89.3, 34.99],
            "quantities": [8, 10],
            "country": "UK",
            "reduction": "STANDARD"
        });
        expect(result).to.deep.equal({total: 1249.17});
    })
    it('doddit renvoyer le total de 19.03 pour la commande {"prices":[15.99],"quantities":[1],"country":"NL","reduction":"STANDARD"} ', function () {
        const result = process.order({
            "prices": [89.3, 34.99],
            "quantities": [8, 10],
            "country": "UK",
            "reduction": "PAY THE PRICE"
        });
        console.log(result)
        expect(result).to.deep.equal({total: 1287.80});
    })
    it('doit renvoyer le total de  pour la commande ', function () {
        const result = process.order({
            "prices": [45.31, 11.43, 9.34],
            "quantities": [7,1,3],
            "country": "DE",
            "reduction": "STANDARD"
        });
        expect(result).to.deep.equal({total: 427.94});
    })
    it('doit envoyer une erreur 404 si country n est pas trouvcé ', function () {
        const result = process.order({
            "prices": [45.31, 11.43, 9.34],
            "quantities": [7,1,3],
            "country": "TU",
            "reduction": "STANDARD"
        });
        console.log(result)
        expect(result).to.deep.equal(undefined);
    })
    it('doit renvoyer le total de  pour la comsdsdmande ', function () {
        const result = process.order({
            "prices": [45.31, 11.43, 9.34],
            "quantities": [100,1,1],
            "country": "DE",
            "reduction": "STANDARD"
        });
        console.log(((45.31*100+11.43+9.34) + (45.31*100+11.43+9.34)*.25)*0.95)
        expect(result).to.deep.equal({total: 5405.23});
    })
})
