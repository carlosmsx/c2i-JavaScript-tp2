let text = prompt('ingrese un texto');

document.write(`${text}<br>`)
text = text.toLocaleLowerCase();

let cuenta = 0;
for (let i=0; i<text.length; i++)
{
    if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u')
        cuenta++;
}

document.write(`el texto tiene ${cuenta} vocale(s)<br>`);
