let sayi1 = 10;
sayi1 = "Altan ANAY";
let student = {id:1, name:"altan"};
console.log(student);

function save(point=10, student)
{
    console.log(student.name + " : " + point);
}

save(undefined, student);

let students = ["altan anay", "hakan","metin","dilek"];

console.log(students);

let students2 = [student,{id:2,hame:"hakan"},"metin", {city:"istanbul"}];

console.log(students2);

//rest parameters
//params = C#
//varArgs = Java
let showProducts = function(id,...products)
{
    console.log(id);
    console.log(products);
    console.log(products[0]);
}

console.log(typeof showProducts);
showProducts(10, "elma","armut","karpuz");
showProducts(20, ["elma","armut","karpuz"]);

//spread
let points = [1,2,3,4,5,6,20,90];
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC","D",..."EFG","H");


//destructuring
let populations = [10000,20000,30000,[40000,10000]];
let [small,medium,high,[veryHigh, maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small1],number)
{
    console.log(small1);
}

someFunction(populations);

let category = {id:1, name:"içecek"}
console.log(category.id);
console.log(category["name"]);

let {id,name} = category;
console.log(id);
console.log(name);