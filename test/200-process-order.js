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
            "prices": [33.25, 45.9, 8.69, 21.75, 77.32, 65.38, 7.49, 48.09, 71.62],
            "quantities": [4,8,1,2,1,2,9,3,10],
            "country": "DE",
            "reduction": "PAY THE PRICE"
        });

        expect(result).to.deep.equal({total: 2110.44});
    })
})

//     2021-03-12T15:15:28.826475+00:00 app[web.1]:   prices: [
//     2021-03-12T15:15:28.826476+00:00 app[web.1]:     33.25,  45.9,  8.69,
// 2021-03-12T15:15:28.826477+00:00 app[web.1]:     21.75, 77.32, 65.38,
// 2021-03-12T15:15:28.826477+00:00 app[web.1]:      7.49, 48.09, 71.62
//     2021-03-12T15:15:28.826478+00:00 app[web.1]:   ],
//     2021-03-12T15:15:28.826478+00:00 app[web.1]:   quantities: [
//     2021-03-12T15:15:28.826478+00:00 app[web.1]:     4, 8, 1,  2, 1,
// 2021-03-12T15:15:28.826478+00:00 app[web.1]:     2, 9, 3, 10
//     2021-03-12T15:15:28.826479+00:00 app[web.1]:   ],
//     2021-03-12T15:15:28.826479+00:00 app[web.1]:   country: 'DE',
// 2021-03-12T15:15:28.826480+00:00 app[web.1]:   reduction: 'PAY THE PRICE'
//     2021-03-12T15:15:28.826480+00:00 app[web.1]: }