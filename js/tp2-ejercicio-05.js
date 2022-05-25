let dni = null;
let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

do {
    dni = prompt("Ingrese un DNI");
    if (dni!=null)
    {
        dni=parseInt(dni);
        if (isNaN(dni))
            alert("el valor introducido no es un número");
        else if (dni<0 || dni>99999999)
            alert("Ingrese un valor entre 0 y 99999999");
        else{
            let index = dni % 23;
            alert(dni+letra[index])
        }
    }
 
} while (dni!=null)