var setaEsquerda = window.document.getElementById("seta-esquerda")
var foto1 = window.document.getElementById("image1")
var foto2 = window.document.getElementById("image2")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    foto1.style ="display:none"
    foto2.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    foto2.style ="display:none"
    foto1.style ="display:flex"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"
}