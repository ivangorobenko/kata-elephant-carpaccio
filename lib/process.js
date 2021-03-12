exports.order = function order(input) {
    const tvas = {
        "UK": 0.3333,
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
        "CZ": 0.19,
        "FI": 0.17,
        "IE": 0.21,
        "CY": 0.21,
        "LU": 0.25,
        "MT": 0.20,
    }
    console.log(input === {})
    if (tvas[input.country] === undefined) return undefined
    if (input === {}) return undefined
    let totalWithoutTVA = 0;
    let totalWithTVA = 0;
    input.prices.forEach((price, index) => {
        const totalWithoutTVAForThePrice = price * input.quantities[index]
        totalWithoutTVA += totalWithoutTVAForThePrice
    })
    let tvaPercentage = tvas[input.country];
    if (input.country === "DE" && totalWithoutTVA > 500) tvaPercentage = 0.25;
    const tva = totalWithoutTVA * tvaPercentage;
    totalWithTVA = totalWithoutTVA + tva;
    if (input.reduction === "STANDARD") {
        if (totalWithTVA >= 50000) totalWithTVA = totalWithTVA * 0.85
        else if (totalWithTVA >= 10000) totalWithTVA = totalWithTVA * 0.9
        else if (totalWithTVA >= 7000) totalWithTVA = totalWithTVA * 0.93
        else if (totalWithTVA >= 5000) totalWithTVA = totalWithTVA * 0.95
        else if (totalWithTVA >= 1000) totalWithTVA = totalWithTVA * 0.97
    }

    return {total: Number(totalWithTVA.toFixed(2))};
}
