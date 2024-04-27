
let contagem = 16;

$('#zoom').click(() => {
   
    $('.texto__noticias__dengue').css('font-size', contagem + "px");
  if(contagem >= 17){
    contagem = contagem
  }else{
    contagem = contagem + 2;
  }
  $('.titulo__noticias__dengue').css('z-index', "-1");
});




new window.VLibras.Widget('https://vlibras.gov.br/app');

