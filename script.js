const botão = document.querySelector("button")
    botão.addEventListener('click', curtir)

    function curtir(){
        let curtidas = document.querySelector("span")
        curtidas.textContent++;
    }


//BOTÃO DO TAMANHO
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)
let fonte =16;
//FUNÇÃO
function aumentarFonte(){
    fonte++;
    document.body.style.fontSize = fonte + "px";
}