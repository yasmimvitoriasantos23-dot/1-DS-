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
// BOTÃO DE CONTRASTE
const contraste = document.getElementById("contraste")
contraste.addEventListener("click",mudar_o_contraste_para_amarelo )

//FUNÇAO
function mudar_o_contraste_para_amarelo(){
    document.body.style.color = "yellow"
}