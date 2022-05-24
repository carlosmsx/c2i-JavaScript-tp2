let total = 0;
while (true) {
    let textoIngresado = prompt("ingrese un número");
    if (textoIngresado == null) {
        confirma = confirm("está seguro que desea salir?");
        if (confirma == true) break;
    } else {
        numero = parseInt(textoIngresado);
        if (isNaN(numero)) {
            alert('el valor ingresado no es un número');
        }
        else {
            total += numero;
        }
    }
}

document.write(total);
