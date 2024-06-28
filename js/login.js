document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const senhaPadrao = 1234
    const login = 'joao@gmail.com'
    const notifica = document.getElementById('notifica');

    
    const senhaPadra = 123
    const logi = 'rute@gmail.com'

    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;

    if (senhaPadrao == senha && login == email) {
        window.open('fila.html', '_self')
    } 
    else if(senhaPadra == senha && logi == email){
        window.open('emailConfirmacao.html', '_self')
    }
    else  {
        notifica.innerHTML = 'Email ou senha inválidos!'
        notifica.open = 'false'
        setTimeout(() => {
            notifica.open = true
            notifica.innerHTML = ''
        }, 200);
    }
   


});
