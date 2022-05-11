var globalCidades = []

function validaCampo() {
    var inputCidade = document.querySelector("#pesquisa").value;
    console.log(inputCidade);
    if (inputCidade == '') {
            alert("Campo Vazio!");
            return;
    }
    pesquisar();    
}  

function pesquisar () {
    window.location.href = "/listaCidades.html";
}

        
    


