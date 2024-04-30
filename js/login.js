document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const senhaPadrao = 1234
    const login = 'joao@gmail.com'
    const notifica = document.getElementById('notifica');

    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;

    if (senhaPadrao == senha && login == email) {
        window.open('fila.html', '_self')
    } else {
        notifica.innerHTML = 'Email ou senha inválidos!'
        notifica.open = 'true'
        setTimeout(() => {
            notifica.open = false
            notifica.innerHTML = ''
        }, 2000);
    }

});

