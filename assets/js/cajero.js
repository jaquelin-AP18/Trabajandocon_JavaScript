function comprobacion(retiro)
{
    if(retiro%50 ==0)
    {
        return 0;
    }

    if(retiro%50 !=0)
    {
        return 1;
    }
}

function main()
{
    let inputValue=parseInt(document.getElementById("retiro").value);
    console.log(inputValue);
    let comprobando = comprobacion();
    if(comprobando==0)
    {
        
    }
}