var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload)', function () {
    it('calls back with an empty object', function () {
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
        expect(result).to.deep.equal({total: 1287.80});
    })
    it('doit renvoyer le total de  pour la commande ', function () {
        const result = process.order({
            "prices": [45.31, 11.43, 9.34],
            "quantities": [7, 1, 3],
            "country": "FR",
            "reduction": "STANDARD"
        });
        expect(result).to.deep.equal({total: 427.94});
    })
    it('doit envoyer une erreur 404 si country n est pas trouvé ', function () {
        const result = process.order({
            "prices": [45.31, 11.43, 9.34],
            "quantities": [7, 1, 3],
            "country": "TU",
            "reduction": "STANDARD"
        });
        console.log(result)
        expect(result).to.deep.equal(undefined);
    })
    it('doit renvoyer le total pour DE avec la reduction de plus de 1000 ', function () {
        const result = process.order({
            "prices": [33.25, 45.9, 8.69, 21.75, 77.32, 65.38, 7.49, 48.09, 71.62],
            "quantities": [4, 8, 1, 2, 1, 2, 9, 3, 10],
            "country": "DE",
            "reduction": "PAY THE PRICE"
        });
        expect(result).to.deep.equal({total: 2026.02});
    });
    it('doit renvoyer le bon total pour DE sans réduction', function () {
        const result = process.order({
            "prices": [600],
            "quantities": [1],
            "country": "DE",
            "reduction": "PAY THE PRICE"
        });
        console.log(600 * 1.2)
        expect(result).to.deep.equal({total: 720});
    })
    it('doit renvoyer le bon total pour la reduction HALF PRICE', function () {
        const result = process.order({
            "prices": [600],
            "quantities": [1],
            "country": "DE",
            "reduction": "HALF PRICE"
        });
        expect(result).to.deep.equal({total: 360});
    })
})