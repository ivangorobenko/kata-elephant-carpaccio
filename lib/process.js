exports.order = function order(input) {
    console.log(input === {})
    if (input === {}) return {}
    let total = 0;
    const tvas = {"UK": 0.19, "DE": 0.2, "DE": 0.2, "SK": 0.18, "PT": 0.23, "FR": 0.2, "SE": 0.23, "IT": 0.25, "ES": 0.21, "AT": 0.22}
    input.prices.forEach((price, index) => {
        let totalWithTVA = 0;
        const totalWithoutTVA = price * input.quantities[index]
        const tva = totalWithoutTVA * tvas[input.country];
        console.log(tvas[input.country])
        totalWithTVA = totalWithoutTVA + tva;
        total += totalWithTVA
    })
    return {total: Number(total.toFixed(2))};
}
