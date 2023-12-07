function sum(a: number, b: number) {
  return a + b;
}

let result = sum(1, 2);

console.log(result);

function applyDiscount(
  price: number,
  giveToCharity?: boolean,
  discountPercentage: number = 50
): number {
  let newPrice = price - (price * discountPercentage) / 100;
  if (giveToCharity) {
    newPrice--;
  }
  return newPrice;
}

let finalPrice = applyDiscount(300);

console.log('final', finalPrice);
