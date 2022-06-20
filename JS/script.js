
function selecionarCidade() {
const select = document.querySelector('#city-choice');

console.log(select);

const indice = select.selectedIndex
const value = select.value
const text = select.options[indice].text

localStorage.texto = text

return text;
}




function imprimirCidade() {

var tag = document.createElement("p");
var newText = document.createTextNode(localStorage.texto);
tag.appendChild(newText);
var element = document.getElementById("newCity");
element.appendChild(tag);
}



