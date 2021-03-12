exports.order = function order(input, onResult) {
    let totalWithTVA = 0;
    const totalWithoutTVA = input.prices[0] * input.quantities[0]
    const tva = totalWithoutTVA * 0.19;
    totalWithTVA = totalWithoutTVA + tva;
    onResult(null, {total: Number(totalWithTVA.toFixed(2))});
}
