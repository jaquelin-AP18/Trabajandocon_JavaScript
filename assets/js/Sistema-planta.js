

function main(temperatura, humedad, numTrabajadores, nivelLiquido)
{
    var form=document.forms[0];
    form.elements[0].value;
verificarParametros(temperatura, humedad, numTrabajadores, nivelLiquido);
}


function verificarParametros(temperatura, humedad, numTrabajadores,nivelLiquido)
{
    if(temperatura>0.9 || temperatura<0.3)
    {
        alert("Temperatura no valida");
    }

    if(humedad >0.5)
    {
        alert ("La humedad es superior");
    }

    if(numTrabajadores>1)
    {
        alert("Hay demasiados trabajadores en la planta")
    }

    if(nivelLiquido>0.9)
    {
        alert("El nivel de liquido es superior, evite desbordamiento")
    }
}