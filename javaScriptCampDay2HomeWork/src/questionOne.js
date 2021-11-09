//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...number)
{
    for(let i = 0; i<=number.length-1;i++)
    {
        let result = true;
        for (let j=2; j<arguments[i]; j++)
        {
            if (arguments[i] % j == 0) {
                result = false;
            }
        }
        if (result == true) {
            console.log(arguments[i]);
        }
    }
}

findPrime(2,3,5,7,8,9,11,12,13,16,17);