const edad=parseInt(prompt('Ingresa tu edad:'));
const nombre= prompt('Ingresa tu nombre:');

//Estructura de control para controlar el flujo
if( edad>=18 && edad <=29)
{
//console.log(`Hola ${nombre}, has sido aceptado en el programa`)
document.write(`<h1> Hola felicidades ${nombre}, has sido aceptado en el programa </h1>`);
}

else if(edad < 60)
{
    document.write(`<h1> Hola${nombre}, Generation pronto abrirá cursos para personas mayores </h1>`);
}

else
{
    document.write(`<h1> Hola lo siento ${nombre}, no has sido aceptado en el programa </h1>`)
}

