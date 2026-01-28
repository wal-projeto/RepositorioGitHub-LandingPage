
/*SEÇÃO CARROSSEL - LAYOUTS DA SEÇÃO E CADS(COM FOTO E TEXTO) DO CARROSSEL, INTRODUZINDO AQUI FINCIONALIDADES DO JAVASCRIP PARA QUE O
CARROSSEL SE MOVIMENTE CONFORME CLICAMOS DA SETA PARA A DIREITA E ESQUERDA*/

var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
/*guardando na variavel Leo o elemento com id= leonardo, que no caso,
é o card do leonardo*/
var Leo = window.document.getElementById("leonardo") 
var Sam = window.document.getElementById("samanta") 
var Bru = window.document.getElementById("bruna") 


function rolarParaDireita(){
    /*quando clicamos na seta para direita, o style,
    o css dentro do card leonardo recebe none, ou seja, o card do leonardo some*/
    Leo.style.display = "none" 
    Bru.style.display = "flex" /*e o card da bruna aparece*/
    setaDireita.style.display = "none" /*escondendo a seta para direita*/
    setaEsquerda.style.display = "flex" /*mostrando a seta para esquerda e ja ajustamos o sua localizacao na tela*/
    
}

function rolarParaEsquerda(){
    /*quando clicamos na seta para esquerda, o style, 
    o css dentro do card leonardo recebe block, ou seja, o card do leonardo aparece*/
    Leo.style.display = "flex" 
    Bru.style.display = "none" /*e o card da bruna some*/
    setaDireita.style.display = "flex"
    setaEsquerda.style.display = "none"
}
