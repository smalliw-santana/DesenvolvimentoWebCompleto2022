// capturando o tamanho da tela
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
 altura = window.innerHeight
 largura = window.innerWidth
 console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()

// valor da posição randomico
function posicaoRandomico() {
 var posicaoX = Math.floor(Math.random() * largura) - 90
 var posicaoY = Math.floor(Math.random() * altura) - 90

 posicaoX = posicaoX < 0 ? 0 : posicaoX
 posicaoY = posicaoY < 0 ? 0 : posicaoY

 console.log(posicaoX, posicaoY);

 // criar o elemento html
 var mosquito = document.createElement('img')
 mosquito.src = 'imagens/mosquito.png'
 mosquito.className = tamanhoAleatorio()
 mosquito.style.left = posicaoX + 'px'
 mosquito.style.top = posicaoY + 'px'
 mosquito.style.position = 'absolute' //o elemento precisa ser absoluto

 document.body.appendChild(mosquito)

 console.log(tamanhoAleatorio())
}

function tamanhoAleatorio() {
 var classe = Math.floor(Math.random() * 3)

 switch (classe) {
  case 0:
   return 'mosquito1'

  case 1:
   return 'mosquito2'

  case 2:
   return 'mosquito3'
 }


}