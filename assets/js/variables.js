/*Se hace uso de varibles cuando queremos 
cambiar su valor a lo largo del programa*/
var variable1= 'Soy la varible';
console.log(variable1);
variable1=1212;
console.log(variable1);

/*Las constantes se utilizan cuando
no queremos cambiar el valor, usado para optimizacion de memoria */
const variable2= 'Soy la varible 2';
console.log(variable2);
//variable2=10;
//console.log(variable2);

/*El uso de let puede ser dentro o fuera de funciones*/
let nueva_variable ='Mi nueva varaible con let';
console.log(nueva_variable);

//Funciones declarada de formal normal

//Trabajando con var
function varTest()
{
    var x =31;
    if (true)
    {
    var x=71;
    console.log(x);
    }
    console.log(x);
    

}
varTest();

//trabajando con let
//Let siempre funciona por medio de scope, utilizado para optimizacion de memoria
function letTest()
{
    let variable3 = 'Soy la variable 3';
    let x =31;
    if (true)
    {
    let x=71;
    console.log(x);
    }
    console.log(x);

}
letTest();

//Funcion declarada como funcion de flecha, esta reemplazando las funciones tradicionales y genera eficiencia
const nuevaFuncion= () =>
{
    var x =31;
    if (true)
    {
    var x=71;
    console.log(x);
    }
    console.log(x);
}
nuevaFuncion();

/* template Strings 
Son plantillas de cadena, son una forma más fácil de crear:
    -Cadenas con variables dentro (interpolación).
    -Generar cadenas multilínea.
    -Ejecutar expresiones, funciones y etiquetados.*/
const nombre = 'Jaquelin';
const apellidos = 'Altamirano Perez';

console.log(`Hola mi nombre es: ${nombre} y mis apellidos son: ${apellidos}`);

/* Spread */
const arreglo = [1,2,3,4,5];
console.log(arreglo);