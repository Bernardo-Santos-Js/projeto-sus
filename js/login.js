document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const senhaPadrao = '1234'; // Usar strings para comparar com o valor do input
    const login = 'joao@gmail.com';
    const senhaAlternativa = '123'; // Corrigido nome da variável
    const emailAlternativo = 'rute@gmail.com';

    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;

    const notifica = document.getElementById('notifica');

    if (senhaPadrao === senha && login === email) {
        window.location.href = 'fila.html'; // Redireciona para fila.html
    } else if (senhaAlternativa === senha && emailAlternativo === email) {
        window.location.href = 'emailConfirmacao.html'; // Redireciona para emailConfirmacao.html
    } else {
        notifica.textContent = 'Email ou senha inválidos!';
        notifica.showModal(); // Mostra o diálogo
        setTimeout(() => {
            notifica.close(); // Fecha o diálogo após 2 segundos
        }, 2000); // Atraso de 2 segundos
    }
});





