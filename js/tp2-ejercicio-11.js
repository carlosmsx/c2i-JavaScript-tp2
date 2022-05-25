let edadMayor=0;
let nombreMayor="";

for (let index=1; index<=3; index++)
{
    let edad = parseInt(prompt("Ingrese edad nro. "+index));
    let nombre = prompt("Ingrese el nombre nro. "+index);
    document.write(nombre+' tiene '+edad+ ' año(s)<br>');
    if (edad>edadMayor)
    {
        edadMayor = edad;
        nombreMayor = nombre;
    }
}

document.write("El mayor es: "+nombreMayor)