let cadena = "";
while (true) {
    let textoIngresado = prompt("ingrese una cadena de texto");
    if (textoIngresado == null) {
        confirma = confirm("está seguro que desea salir?");
        if (confirma == true) break;
    } else {
        cadena += " " + textoIngresado;
    }
}

document.write(cadena);
