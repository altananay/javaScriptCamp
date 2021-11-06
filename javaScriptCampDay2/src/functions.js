function addToCart(productName="Elma", quantity)
{
    console.log("Sepete eklendi: " + productName + " Adet Sayısı: " + quantity);
}

addToCart();
addToCart("Bilgisayar");
addToCart(20);

let sayHello = () => {
    console.log("hello");
}

sayHello();

let sayHello2 = function()
{
    console.log("hello 2");
}

sayHello2();

function addToCart2(productName, quantity, unitPrice)
{

}

addToCart2("elma",5,10);
addToCart2("armut",2,20);
addToCart2("limon",3,15);

function addToCart3(product)
{
    console.log("Ürün : " + product.productName + " Adet fiyatı: " + product.unitPrice + " Adet sayısı : " + product.quantity);
}

let product = {
    productName : "Elma",
    unitPrice : 10,
    quantity : 5
}

addToCart3(product);

let product2 = {
    productName : "Elma",
    unitPrice : 10,
    quantity : 5
}

let product3 = {
    productName : "Elma",
    unitPrice : 10,
    quantity : 5
}

product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

function addToCart4(products)
{
    console.log(products);
}

let products = [
    {productName: "Elma", unitPrice:10,quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10,quantity:5}
]

addToCart4(products);

function sum(...numbers) //rest operator
{
    let total = 0;
    for (let i =0; i < numbers.length; i++)
    {
        total += numbers[i];
    }
    console.log(total);
}

sum(20,30);
sum(20,30,40);
sum(20,30,40,50);

let numbers = [30,10,500,600,120];
console.log(...numbers);
console.log(Math.max(...numbers));

let [icAnadolu,marmara, karadeniz,[icAnadoluSehirleri]] = [
    {name: "ic anadolu", population:"20M"},
    {name: "marmara", population:"30M"},
    {name: "karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","bursa"],
        ["sinop","trabzon"]
    ]
]

console.log(icAnadolu);
console.log(marmara);

console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity 
({ productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity
} = {productName:"elma", unitPrice:10, quantity:5})

console.log(newProductName);