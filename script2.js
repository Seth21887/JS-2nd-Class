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

// did this section wrong using document.write for every single line, made it a hassle and was difficult to create a div this way.

// document.write(`<h3>Customer Receipt</h3>`);
// document.write(`<b>Purchase:</b> ` + productName + ` x ` + quantity + "<br>");
// document.write("<b>Price per unit:</b> " + productPrice + "<br>");
// document.write("<b>Subtotal:</b> " + subtotal + "<br>");
// document.write("<b>Taxes:</b> " + purchaseTaxes + "<br>");
// document.write("<b>Total:</b> " + total + "<br>");

document.write(`
<div class=receipt>
    <h3>Customer Receipt</h3>
    <p><b>Purchase: </b>${productName} x ${quantity}</p>
    <p><b>Price Per Unit: </b>${productPrice}</p>
    <p><b>Subtotal: </b>${subtotal}</p>
    <p><b>Taxes: </b>${taxes}</p>
    <p><b>Total: </b>${total}</p>

`)