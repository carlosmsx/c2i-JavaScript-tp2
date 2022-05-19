let cadena = prompt("Ingrese su edad");
let edad = parseInt(cadena);
if (isNaN(edad))
    document.write('El valor ingresado "'+cadena+'" no es una edad válida')
else if (edad<0)
    document.write('El valor ingresado "'+cadena+'" no es una edad válida. Debe ser un entero positivo');
else if (edad>=18)
    document.write('ya puede conducir');
else
    document.write('aun no es mayor de 18, no puede conducir');
