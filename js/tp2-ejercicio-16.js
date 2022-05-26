let text = prompt('ingrese un texto');

document.write(`${text}<br>`)

for (let i=text.length-1; i>=0; i--)
{
    document.write(text[i])
}

