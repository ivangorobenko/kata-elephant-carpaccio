exports.order = function order(input) {
    const tvas = {
        "UK": 0.21,
        "DE": 0.2,
        "SK": 0.18,
        "PT": 0.23,
        "FR": 0.3,
        "SE": 0.23,
        "IT": 0.25,
        "ES": 0.19,
        "AT": 0.22,
        "RO": 0.2,
        "BE": 0.24,
        "NL": 0.2,
        "HU": 0.27,
        "PL": 0.21,
        "EL": 0.2,
        "DK": 0.21,
        "HR": 0.23,
        "LT": 0.23,
        "SI": 0.24,

    }
    console.log(input === {})
    if (tvas[input.country] === undefined) return undefined
    if (input === {}) return undefined
    let total = 0;
    input.prices.forEach((price, index) => {
        let totalWithTVA = 0;
        let tvaPercentage = tvas[input.country];
        const totalWithoutTVA = price * input.quantities[index]

        if (input.country === "DE" && totalWithoutTVA > 500) tvaPercentage =  0.25 ;
        const tva = totalWithoutTVA * tvaPercentage;
        totalWithTVA = totalWithoutTVA + tva;

        total += totalWithTVA
    })
    if (input.reduction === "STANDARD") {
        if (total >= 50000) total = total * 0.85
        else if (total >= 10000) total = total * 0.9
        else if (total >= 7000) total = total * 0.93
        else if (total >= 5000) total = total * 0.95
        else if (total >= 1000) total = total * 0.97
    }

    return {total: Number(total.toFixed(2))};
}
