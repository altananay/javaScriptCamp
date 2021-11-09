//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function findDivSum(array)
{
    let sum = 0;
    for (let i = 0; i<array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}

function findFriendNumber(number, number2)
{
    let numberDiv = [];
    let number2Div = [];
    for (let i = 0; i<number; i++)
    {
        if (number % i == 0)
        {
            numberDiv.push(i);
        }
    }

    let numberDivSum =  findDivSum(numberDiv);

    for (let i = 0; i<number2; i++)
    {
        if (number2 % i == 0) {
            number2Div.push(i);
        }
    }

    let number2DivSum = findDivSum(number2Div);
   
    if (numberDivSum == number2 && number2DivSum == number) {
        console.log("arkadaş sayı");
    }
    else
    {
        console.log("arkadaş sayı değil");
    }

}

findFriendNumber(220,284);