//Início da configuração do "Dialog"
const botao = document.getElementById('abrir');
const caixa = document.getElementById('caixa');
const mascara = document.querySelector('.mascara');
const fechar = document.getElementById('fechar');

fechar.addEventListener('click', (e)=> {
    abrirMascara(false);
    caixa.open = false;
});

botao.addEventListener('click', (e)=>{
    abrirMascara(true);
    caixa.open = true;
});

//Fim da configuração do "Dialog"


function abrirMascara(valor){
    if(valor == true){
        mascara.style.display = 'block';
    } else{
        mascara.style.display = 'none';
    }
}
    //Fim da configuração do "Dialog"

    //Início do "calendario"

    $(function () {
        $("#dialog").dialog();
    });
    
    $('#datepicker').datepicker({
        dateFormat: "d/m/yy",
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Sexta', 'Sábado'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        onselect: (data)=>{
            $('#data').val(data);
        }
    });

//OBS: não tá funcionando talvez seja o JS.
//Fim do "Calendário"