const botao = document.getElementById("botao");
const navbar = document.getElementById("navbar"); /*const o nome dela é só pra identificar, posso colocar qlqr um*/ /* o toggle ele se  colocar ele aparece o menu sanduiche */
botao.addEventListener("click", () => {/*classList é a ista de class da navbar*/
navbar.classList.toggle('menu'); /*vai verificar se a classe ja foi aplicada, se sim ele tira se não ele coloca*/
    console.log(navbar)
})



let contagem = 16;

$('#zoom').click(() => {
   
    $('.texto_pagina').css('font-size', contagem + "px");
  if(contagem >= 17){
    contagem = contagem
  }else{
    contagem = contagem + 2;
  }
  $('.texto_pagina').css('z-index', "-1");
});