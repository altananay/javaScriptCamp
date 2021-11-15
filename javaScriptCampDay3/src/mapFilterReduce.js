let cart = [
    {id: 1, productName: "Telefon", quantity:3, unitPrice: 5000},
    {id: 2, productName: "bardak", quantity:2, unitPrice: 30},
    {id: 3, productName: "kalem", quantity:1, unitPrice: 20},
    {id: 4, productName: "bilgisayar", quantity:3, unitPrice: 100}
]

cart.map(product => console.log(product.productName));

console.log("<ul>");
cart.map(product => {
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"</li>");
})
console.log("</ul>")

let quantityOver2 = cart.filter(product => product.quantity>2);

console.log(quantityOver2);

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);
console.log(total);

function addToCart(cart) {
    cart.push( {id: 5, productName: "kulaklık", quantity:2, unitPrice: 200})
}

addToCart(cart);

console.log(cart);

let sayi = 10;

function sayiTopla(number)
{
    number += 1;
}

sayiTopla(sayi);

console.log(sayi);