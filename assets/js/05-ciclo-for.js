//Los ciclos son usados para hacer un codigo repetitivo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'
,'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//console.log(meses[0]);

for (let i=0; i<12; i++)
{
console.log(meses[i]);
}

//Funciones de flecha
const multiplicar= (numero)=>
{
    //Ciclo usado cuando conocemos el numero de iteraciones que queremos realizar
    for(let i=1; i <=10; i++)
    {
        console.log(`${numero} x ${i} = ${i*numero}`);
    }
}

multiplicar(5);