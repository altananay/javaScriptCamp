console.log("hello world");

let konutKredileri = ["Konut kredisi", "Emlak konut kredisi", "Kamu konut kredisi","Özel kredi konut kredisi"];

console.log("<ul>");
for (let i =0; i<konutKredileri.length;i++)
{
    console.log("<li>"+konutKredileri[i]+"</li>");
}
console.log("</ul>");