while (true) {
    let x = prompt("Ingrese un numero");
    if (x == null) {
        document.write("gracias por utilizar nuestros servicios!");
        break;
    } else {
        x = parseInt(x);
        if (isNaN(x)) {
            alert("introduce un número válido");
        } else if (x < 0 || x > 10) {
            alert("número erróneo");
        } else {
            switch (x) {
                case 0:
                case 1:
                case 2:
                    alert("Muy deficiente");
                    break;
                case 3:
                case 4:
                    alert("Insuficiente");
                    break;
                case 5:
                case 6:
                    alert("Suficiente");
                    break;
                case 7:
                    alert("Bien");
                    break;
                case 8:
                case 9:
                    alert("Notable");
                    break;
                case 10:
                    alert("Sobresaliente");
                    break;
            }
        }
    }
}
