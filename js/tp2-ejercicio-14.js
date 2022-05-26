let text = prompt('ingrese un texto');
for (let i=0; i<text.length-1; i++)
{
    document.write(text[i]+'-');
}
document.write(text[text.length-1])