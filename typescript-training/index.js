function sum(a, b) {
    return a + b;
}
var result = sum(1, 2);
console.log(result);
function applyDiscount(price, giveToCharity, discountPercentage) {
    if (discountPercentage === void 0) { discountPercentage = 50; }
    var newPrice = price - (price * discountPercentage) / 100;
    if (giveToCharity) {
        newPrice--;
    }
    return newPrice;
}
var finalPrice = applyDiscount(300);
console.log('final', finalPrice);
