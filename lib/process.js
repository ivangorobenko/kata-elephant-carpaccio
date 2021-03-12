exports.order = function order(input) {
    console.log(input)
    if (input === {}) return {}
    let total = 0;
    input.prices.forEach((price, index) => {
        let totalWithTVA = 0;
        const totalWithoutTVA = price * input.quantities[index]
        const tva = totalWithoutTVA * 0.21;
        totalWithTVA = totalWithoutTVA + tva;
        total += totalWithTVA
    })
    return {total: Number(total.toFixed(2))};
}
