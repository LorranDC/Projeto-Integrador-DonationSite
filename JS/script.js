var spamElement = document.getElementById("file-preview__default-text");

function lerInputFile() {
    var fileInput = document.getElementById("fileUpload");
    var filePatch = fileInput.value;
    var filtro = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if(!filtro.exec(filePatch)) {
        return getVideoPreview(fileInput);
    }
    else 
    {
        return getImagePreview(event);
    }
}


function getVideoPreview(self) {
    var file = self.files[0];
    var reader = new FileReader();
    var spanDiv = document.getElementById("file-preview__default-text");
    
    reader.onload = function(e) {
        var src = e.target.result;
        var video = document.getElementById("videoPreview");
        var source = document.getElementById("source");

        source.setAttribute("src", src);
        video.load();
        video.play();
        video.style.display = "block";
    };
    reader.readAsDataURL(file);
    spamElement.style.visibility = "hidden"; 
}

function getImagePreview (event) {

    var image = URL.createObjectURL(event.target.files[0]);
    var imagediv = document.getElementById('filePreview');
    var newimg  = document.createElement('img');
    imagediv.innerHTML ="";
    newimg.src = image;
    newimg.width = "400";
    newimg.height = "250";
    newimg.setAttribute('id', 'imgPreview')
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

function postPub() {
    const formulario = document.querySelector('#postForm');
    formulario.addEventListener('submit', event => event.preventDefault())
    var legenda = document.getElementById('legend').value;
    
    
    function filtroUpload() {
    
        var fileInput = document.getElementById("fileUpload"); 
        var filePatch =fileInput.value;
        var filtro = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        
        if(!filtro.exec(filePatch)) {
            return uploadVideo(fileInput);
        }
        else
        {
            return uploadImagem(fileInput);
        }

        function uploadVideo(self) {
            var file = self.files[0];
            var reader = new FileReader();
    
            reader.onload = function(e) {
            var src = e.target.result;
            var video = document.getElementById("videoUpload");
            var source = document.getElementById("postSource");

            source.setAttribute("src", src);
            video.load();
            video.play();
            video.style.display = "block";
        };
        reader.readAsDataURL(file);
        }

        function uploadImagem(self) {
            var videoDiv = document.getElementById("videoUpload");
            var file = self.files[0];
            var reader = new FileReader();
    
            reader.onload = function(e) {
            var src = e.target.result;
            var imageDiv = document.getElementById("imagePost");
            var imageSource = document.getElementById("imagePost");

            imageSource.setAttribute("src", src);
            imageDiv.style.display = "block";
        };
        reader.readAsDataURL(file);
        videoDiv.style.display ="none";
        }
    }


    var postList = document.getElementById('post');    
    var post = `

    <li class="post" id="post">                       
        <div class="postModelTitle">
         <label for="userIcon"><i class="fa-solid fa-user-large fa-2xl" id="userIcon"></i>Usuário</label>
        <button type="submit">Entrar em contato</button>    
        </div>
        <div>
            <p>AQUI ESTARÁ A LEGENDA DA PUBLICAÇÃO</p>
            <p> ${legenda}</p>
        </div>  
        <div class="file-post" id="filePost">
           <video autoplay id="videoUpload" class="videoUpload" controls>
                <source id="postSource" class="postSource" type="video/mp4">
           </video> 
           <img id="imagePost" class="imagePost">
        </div>                                    
    </li>
    `;
    postList.insertAdjacentHTML('afterend', post);
    filtroUpload();
    limparCamposPostBox();
}

function limparCamposPostBox() {
    let campoDescricao = document.getElementById("legend");
    const campoConteudo = document.getElementById("imgPreview");


    campoDescricao.value = "";
    campoConteudo.remove();

    spamElement.style.display = 'block';
}