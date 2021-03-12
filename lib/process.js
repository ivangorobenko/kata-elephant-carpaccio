const determineReductionForStandardReduction = totalWithTVA => {
    if (totalWithTVA >= 50000) return 15
    if (totalWithTVA >= 10000) return 10
    if (totalWithTVA >= 7000) return 7
    if (totalWithTVA >= 5000) return 5
    if (totalWithTVA >= 1000) return 3
    return 0
};

function applyReduction(totalWithTVA, reduction) {
    return totalWithTVA * (1 - reduction / 100);
}

function roundToTwoDigits(totalWithTVA) {
    return Number(totalWithTVA.toFixed(2));
}

exports.order = function order(input) {
    const tvas = {
        "UK": 0.21,
        "DE": 0.2,
        "SK": 0.18,
        "PT": 0.23,
        "FR": 0.2,
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
    if (tvas[input.country] === undefined) return undefined
    if (input === {}) return undefined
    let totalWithoutTVA = 0;
    let totalWithTVA = 0;
    input.prices.forEach((price, index) => {
        const totalWithoutTVAForThePrice = price * input.quantities[index]
        totalWithoutTVA += totalWithoutTVAForThePrice
    })
    let tvaPercentage = tvas[input.country];
    const tva = totalWithoutTVA * tvaPercentage;
    totalWithTVA = totalWithoutTVA + tva;
    if (input.reduction === "STANDARD") {
        const reduction = determineReductionForStandardReduction(totalWithTVA);
        totalWithTVA = applyReduction(totalWithTVA, reduction)
    }
    if (input.reduction === "HALF PRICE") totalWithTVA = applyReduction(totalWithTVA, 50)

    return {total: roundToTwoDigits(totalWithTVA)};
}
