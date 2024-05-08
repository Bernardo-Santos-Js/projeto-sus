const botao = document.getElementById("botao");
const navbar = document.getElementById("navbar"); /*const o nome dela é só pra identificar, posso colocar qlqr um*/ /* o toggle ele se  colocar ele aparece o menu sanduiche */
botao.addEventListener("click", () => {/*classList é a ista de class da navbar*/
navbar.classList.toggle('menu'); /*vai verificar se a classe ja foi aplicada, se sim ele tira se não ele coloca*/
    console.log(navbar)
})



