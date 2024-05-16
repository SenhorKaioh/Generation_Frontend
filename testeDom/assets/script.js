let elemento_titulo = document.getElementById("titulo");
console.log(elemento_titulo);

let elemento_class = document.getElementsByClassName("center");
console.log(elemento_class);

let conteudo_titulo = elemento_titulo,innerHTML;
console.log(conteudo_titulo);

elemento_titulo.style.color = "blue"

let elemento_imagem = document.getElementById("imagem");

elemento_imagem.setAttribute('src', 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2jllfur7p1e6u14vbrtd.png');

// definindo manipulaodres de eventos

let input_change = document.querySelector("#input_change");
const botao_click = document.querySelector("#botao_clique");
const botao_over = document.querySelector("#botao_over");

function upperCase(){
    let uppercase = input_change.value.toUpperCase();
    alert(`Texto com letras maiúsculas: ${uppercase}`);
}

botao_click.addEventListener("click", () => {
    alert("O botão foi clicado");
});

botao_over.addEventListener("mouseover", () => {
    alert("O mouse passou sobre o botão!");
   });