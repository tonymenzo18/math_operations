let item1 = 1;
let item2 = 2;
let item3 = 3;
let totalCost = item1 + item2 + item3;
let totalAverage = totalCost / 3;
let remainder = totalCost % totalAverage;
let originalPrice = 100;
let discountPercent = 20;
let discountAmount = originalPrice * discountPercent / 100;
let discountedPrice = originalPrice - discountAmount;
let reversePercent = discountedPrice / (1 - discountPercent / 100)

console.log("The total cost of the item is: $" + totalCost);

console.log("The average is: " + totalAverage);

console.log(remainder + " is an even number")

console.log("The discounted price: $" + discountedPrice);

console.log("The original price before the discount was: $" + reversePercent)