//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

for (let i=2; i < 1000; i++)
{
    let result = true;
    for (let j = 2; j<i; j++)
    {
        if (i % j == 0) {
            result = false;
            break;
        }
    }

    if (result == true) {
        console.log(i);
    }
}