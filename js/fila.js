const botao = document.getElementById("botao");
const navBar = document.getElementById("navBar"); /*const o nome dela é só pra identificar, posso colocar qlqr um*/ /* o toggle ele se  colocar ele aparece o menu sanduiche */
botao.addEventListener("click", () => {/*classList é a ista de class da navbar*/
    navBar.classList.toggle('responsive'); /*vai verificar se a classe ja foi aplicada, se sim ele tira se não ele coloca*/
    console.log(botao)
})


const numero = document.getElementById("numero");
let numeroAleatorio = Math.floor(Math.random() * 100);
//console.log(numeroAleatorio);
numero.innerText = numeroAleatorio;




