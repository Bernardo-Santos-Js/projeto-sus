let resultado = document.getElementById('resultado');
let form = document.getElementById('form');

    let usuario = {
        'firstname': 'Jéssica Gomes',
        'dataNascimento': '01/03/1995',
        'email': 'jessika1915@live.com',
        'complemento': 'casa4',
    };
    console.log(usuario)

    let usuarioString = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuarioString);
    console.log(localStorage.getItem('usuario'));
    let dadosArmazenados = localStorage.getItem('usuario');
    let obj = JSON.parse(dadosArmazenados);
    console.log(obj);

function limparDados() {
    localStorage.clear(sds);
}

