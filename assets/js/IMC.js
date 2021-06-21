function main ()
{
    let peso=document.forms[0].elements[0].value;//Cachamos el valor de la primera cajita del form
    let estatura=document.forms[0].elements[1].value;//cachamos el valor dela segunda cajita del form
    let numero=document.forms[0].elements[2].value;//cachamos el valor de la tercera cajita del form

    console.log(typeof(numero));
    masa(peso,estatura);//Llamamos a la funcion
    serie(numero);
}

/**Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), 
 * calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase:
 * Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales. */

function masa(kilo,estatura)
{
    let resultado;
    resultado=parseFloat((kilo/(estatura*estatura)));
    console.log(resultado.toFixed(2));

}

/**Escribir un programa que lea un entero positivo, n , introducido por el usuario y después muestre en pantalla la suma de todos los enteros desde 1 hasta n */

function serie(n)
{
    let resultado;
    resultado=(n*(n+1))/2;
    console.log(resultado);
}