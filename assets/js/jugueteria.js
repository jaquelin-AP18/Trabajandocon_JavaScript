/*Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.
 */

/** var payaso=parseInt( prompt("Ingrese el numero de payasos"));
var muneca= parseInt( prompt("Ingrese el numero de Muñecas"));*/

var payaso=parseInt( prompt("Ingrese el numero de payasos"));
var muneca= parseInt( prompt("Ingrese el numero de Muñecas"));

/** En la variable numPaquetes almacenamos el valor del numero de paquete totales*/
function main(payasos, munecas)
{
    let pesoT=pesoPaquete(payasos,munecas);
    let numPaquetes=(pesoPaquete(payasos,munecas))/1000;
    if((numPaquetes*1000)%1000 !=0)
    {
        numPaquetes=parseInt(numPaquetes)+1;
    }
    console.log(numPaquetes);
    console.log(pesoT/1000);
}

function pesoPaquete(payasos, munecas)
{
    let pesoTotal=(payasos*122)+(munecas*75);
    return pesoTotal;
}

/** Aqui se ejecuta el programa por que mandamos a llamar la funcion main */
main(payaso, muneca);