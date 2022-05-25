let n = parseInt(prompt("Ingrese un numero entre 1 y 50"));

if (isNaN(n)) document.write("el valor ingresado no es un número válido");
else if (n < 1 || n > 50) document.write("el valor ingresado está fuera del rango entre 1 y 50");
else {
    for (let i = n; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            document.write(i);
        }
        document.write("<br>");
    }
}
