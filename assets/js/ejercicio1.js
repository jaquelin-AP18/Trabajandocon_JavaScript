
const num1=parseInt(prompt('Ingresa numero 1'));
const num2=parseInt(prompt('Ingresa numero 2'));


while (num1<=0 || num2<=0 || isNaN(num1) isNaN(num2))
{
    num1=parseInt(prompt('Ingresa numero 1'));
    num2=parseInt(prompt('Ingresa numero 2'));
}
/*

if(num1>num2)
{
    document.write(`<h1> El numero  ${num1}, es el mayor.</h1>`);
}

else 
{
    document.write(`<h1> El numero  ${num2}, es el mayor.</h1>`);
}



if (num1==num2)
{
    document.write(`<h1> El numero  ${num1}, es igual a ${num2}</h1>`);
}
*/

if(num1 ==0 && num2==0)
{
    document.write(`<h1> Ingresa un numero mayor a 0</h1>`);

    if (num1>num2) {
        document.write(`<h1> El numero  ${num1}, es el mayor.</h1>`);
    } else {
        document.write(`<h1> El numero  ${num2}, es el mayor.</h1>`);
    }
}

else{
    document.write(`<h1> El numero  ${num1}, es igual a ${num2}</h1>`);
}
    