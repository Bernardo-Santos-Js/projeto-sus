let slideIndex = 1;

function passarImagem(n){
    showSlides(slideIndex += n);
}
function atual(n){
    showSlides(showSlides = n);
}

function showSlides(n){
    //pegar todos os elementos que tiverem a classe ".slides"
    let slides = document.getElementsByClassName("slides");
    //pegar todos os elementos que tiverem a classe ".dot"
    let dots = document.getElementsByClassName('dot');
    //console.log(dots);
    //se o sileIndex for maior que o numero de slides é atruido 1 para a variavel
    if(n > slides.length) {
        slideIndex = 1;
    } 
    if(n < 1){
        slideIndex = slides.length;
    }
    //repetição para ocultar todos os slides
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display =  'none';
    }
    //repetição para muda a classe do dot retira (se houver) a classe ".active"
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //atribui o slide atual a ser exibido e seu respectivo ponto (.dot)
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);