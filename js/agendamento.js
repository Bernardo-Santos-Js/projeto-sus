//Início da configuração do "Dialog"
const abrir = document.getElementById('abrir');
const caixa = document.getElementById('caixa');
const mascara = document.querySelector('.mascara');
const fechar = document.getElementById('fechar');

fechar.addEventListener('click', (e)=> {
    abrirMascara(false);
    caixa.open = false;
});

abrir.addEventListener('click', (e)=>{
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
        nextText: 'Próximo',
                prevText: 'Anterior',
                closeText: 'Fechar',
                beforeShowDay: function (date) {
                    if (date.getDate() >= 15 && date.getDate() <= 18) {
                        return [true, 'dia_especifico'];
                    }
                    return [true, ''];
                },
        onselect: (data)=>{
            $('#data').val(data);
            
        }
    });

//Fim do "Calendário"




