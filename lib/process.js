exports.order = function order(input, onResult) {
    // Commande  => input {"prices":[15.99],"quantities":[1],"country":"ES","reduction":"STANDARD"}
    // Calculer le total à payer
    console.log(input)
    onResult(null, {});
}
