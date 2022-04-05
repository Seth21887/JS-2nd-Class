let productName = prompt("Enter Product Name:");
let productPrice = prompt("Enter price:");
let quantity = prompt("How many are you purchasing?")
let subtotal = (productPrice * quantity);
const taxes=0.11;
let purchaseTaxes = (taxes * subtotal);
let total = (subtotal+purchaseTaxes);

console.log("Purchase: " + productName + " x " + quantity);
console.log("Price per unit: " + productPrice);
console.log("Subtotal: " + subtotal);
console.log("Taxes: " + purchaseTaxes);
console.log("Total: " + total);

document.write("Customer Receipt");
document.write("Purchase: " + productName + " x " + quantity);
document.write("Price per unit: " + productPrice);
document.write("Subtotal: " + subtotal);
document.write("Taxes: " + purchaseTaxes);
document.write("Total: " + total);