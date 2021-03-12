exports.order = function order(input, onResult) {
    let totalWithTVA = 0;
    const totalWithoutTVA = input.prices[0] * input.quantities[0]
    const tva = totalWithoutTVA * 0.19;
    totalWithTVA = totalWithoutTVA + tva;
    // Commande  => input {"prices":[15.99],"quantities":[1],"country":"ES","reduction":"STANDARD"}
    // Calculer le total à payer
    //{total: }
    onResult(null, {total: totalWithTVA.toFixed(2).toString()});
}
