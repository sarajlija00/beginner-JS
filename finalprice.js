const pdv = 0.17;
let productPrice = 145.34;
let comm = 0.34;

let commission;
let finalPrice;

finalPrice = (productPrice*pdv) + productPrice;
commission = (finalPrice*comm);

console.log (finalPrice);
console.log(commission);