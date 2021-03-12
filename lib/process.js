const determineReductionForStandardReduction = totalWithTVA => {
    if (totalWithTVA >= 50000) return 15
    if (totalWithTVA >= 10000) return 10
    if (totalWithTVA >= 7000) return 7
    if (totalWithTVA >= 5000) return 5
    if (totalWithTVA >= 1000) return 3
    return 0
};

const applyReduction = (totalWithTVA, reduction) => totalWithTVA * (1 - reduction / 100);

const roundToTwoDigits = totalWithTVA => Number(totalWithTVA.toFixed(2));

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

const calculateTotalWithoutTVA = input => {
    let totalWithoutTVA = 0;
    input.prices.forEach((price, index) => {
        const totalWithoutTVAForThePrice = price * input.quantities[index]
        totalWithoutTVA += totalWithoutTVAForThePrice
    })
    return totalWithoutTVA;
};

const calculateTva = (totalWithoutTVA, country) => {
    const tvaPercentage = tvas[country];
    return totalWithoutTVA * tvaPercentage;
};

function calculateReduction(totalWithTVA, reduction) {
    if (reduction === "STANDARD") return determineReductionForStandardReduction(totalWithTVA);
    if (reduction === "HALF PRICE") return 50
    return 0
}

exports.order = function order(input) {
    if (tvas[input.country] === undefined) return undefined
    if (input === {}) return undefined
    const totalWithoutTva = calculateTotalWithoutTVA(input);
    const tva = calculateTva(totalWithoutTva, input.country);
    const totalWithTvaWithoutReduction = totalWithoutTva + tva;
    const reduction = calculateReduction(totalWithTvaWithoutReduction, input.reduction);

    const total = applyReduction(totalWithTvaWithoutReduction, reduction)

    return {total: roundToTwoDigits(total)};
}
