<?php
$host="localhost";
$banco = "projeto_sus";
$user = "root";
$senha = "";
$conexao = new PDO ("mysql:host=$host;dbname=$banco", $user, $senha);
    if(!$conexao){
        echo "A conexão com o banco falhou, verifique as configurações!";
    }
    


?>