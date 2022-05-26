let nCols = parseInt(prompt("Ingrese el número de columas"))
let nRows = parseInt(prompt("Ingrese el número de filas"))

//TODO: validar valores ingresados

let cuenta = nRows * nCols;

document.write('<table class="container table table-bordered">');
document.write('<tbody>');
for (let row=0; row<nRows; row++)
{
  document.write('<tr>');
for (let col=0; col<nCols; col++)
{
  document.write('<td class="text-center">'+cuenta+'</td>');
  cuenta--;
}
document.write('</tr>');
}
document.write('</tbody>');
document.write('</table>');