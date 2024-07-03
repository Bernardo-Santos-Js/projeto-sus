const resultado = document.getElementById('resultado');
const form = document.getElementById('formulario');
const input = document.getElementById('cep');
const notifica = document.getElementById('notifica');
const exibeDados = document.getElementById('exibe');
const deficiencia = document.getElementById('select');
const necessidades = document.getElementById('necessidades');

input.addEventListener('input', buscaCEP);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let usuario = {
        'nome': nome,
        'dataNascimento': dataNascimento,
        'email': email,
        'telefone': telefone

    };

    let usuarioString = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuarioString);
    console.log(localStorage.getItem('usuario'))

    let dadosArmazenados = localStorage.getItem('usuario')

    let obj = JSON.parse(dadosArmazenados);
    console.log(obj)
});

function buscaCEP() {
    const cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    if(cep.length == 8){
        fetch(url)
        .then(response =>response.json())
        .then (data=>{
            if(data.erro){
                notifica.textContent = "CEP Inválido";
                notifica.open = true;
                return
            }

            notifica.textContent = "CEP encontrado!";
            notifica.open = true;
            setTimeout(() => {notifica.open = false}, 1000);
            document.getElementById('rua').value = data.logradouro
            document.getElementById('bairro').value = data.bairro
            document.getElementById('cidade').value = data.localidade
            document.getElementById('uf').value = data.uf
        })
    } else {
    notifica.textContent = "Digite 8 números válidos.",
       notifica.open = true;
    } }

function limparDados() {
    localStorage.clear();
}

deficiencia.addEventListener('change', ()=>{
    necessidades.style.display='block';
})

