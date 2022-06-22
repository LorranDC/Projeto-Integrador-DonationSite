
function getImagePreview(event) {
    var image = URL.createObjectURL(event.target.files[0]);
    var imagediv = document.getElementById('imagePreview');
    var newimg  = document.createElement('img');
    imagediv.innerHTML ="";
    newimg.src = image;
    newimg.width = "400";
    newimg.height = "250";
    imagediv.appendChild(newimg);
}

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



