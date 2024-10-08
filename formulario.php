<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
    <link rel="stylesheet" href="styles/formulario.css">
</head>

<body>
    <div class="container">
        <div class="form-image">
            <img src="img/logo sus.png" alt="Logo SUS">
        </div>
        <div class="form">
            <form id="formulario">
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div class="login-button">
                        <button type="submit"><a href="login.html">Login</a></button>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-box">
                        <label for="nome">Nome Completo</label>
                        <input id="nome" type="text" name="nome" placeholder="Digite seu nome completo" required>
                    </div>

                    <div class="input-box">
                        <label for="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="O CPF deve estar no formato XXX.XXX.XXX-XX"
                            maxlength="14" oninput="formatCpf(this)">
                    </div>

                    <div class="input-box">
                        <label for="dataNascimento">Data de nascimento</label>
                        <input id="dataNascimento" type="date" name="dataNascimento"
                            placeholder="Digite sua data de nascimento" required>
                    </div>
                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required>
                    </div>

                    <div class="input-box">
                        <label for="telefone">Celular</label>
                        <input id="telefone" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" required>
                    </div>

                    <div class="input-box">
                        <label for="cep">CEP</label>
                        <input id="cep" type="number" name="cep" placeholder="xx.xxx-xxx" required>
                    </div>

                    <div class="input-box">
                        <label for="logradouro">Logradouro</label>
                        <input id="logradouro" type="text" name="logradouro" placeholder="Logradouro" required>
                    </div>

                    <div class="input-box">
                        <label for="rua">Rua</label>
                        <input id="rua" type="text" name="rua" placeholder="Rua" required>
                    </div>

                    <div class="input-box">
                        <label for="bairro">Bairro</label>
                        <input id="bairro" type="text" name="bairro" placeholder="Bairro" required>
                    </div>

                    <div class="input-box">
                        <label for="cidade">Cidade</label>
                        <input id="cidade" type="text" name="cidade" placeholder="Cidade" required>
                    </div>
                    
                    <div class="input-box">
                        <label for="uf">UF</label>
                        <input id="uf" type="text" name="uf" placeholder="UF" required>
                    </div>


                    <div class="input-box">
                        <label for="complemento">Complemento</label>
                        <input id="complemento" type="text" name="complemento" placeholder="Digite seu complemento"
                            required>
                    </div>

                    <div class="input-box">
                        <label for="ponto">Ponto de referência</label>
                        <input id="ponto" type="text" name="ponto" placeholder="Ponto de referência" required>
                    </div>

                    <div class="input-box">
                        <label for="senha">Senha</label>
                        <input id="senha" type="password" name="senha" placeholder="Digite sua senha" required>
                    </div>


                    <div class="input-box">
                        <label for="confirmeSenha">Confirme sua Senha</label>
                        <input id="confirmeSenha" type="password" name="confirmeSenha" placeholder="Confirme sua senha"
                            required>
                    </div>

                </div>

                <div class="pne-input">
                    <div class="pne-title">
                        <h6>Possui algum tipo de deficiência?</h6>
                    </div>
                    <div class="pne-group">
                        <select name="deficiencias" id="select">
                            <option value="">Não</option>
                            <option value="auditiva">Deficiência Auditiva</option>
                            <option value="fisica">Deficiência Física</option>
                            <option value="intelectual">Deficiência Intelectual</option>
                            <option value="visual">Deficiência Visual</option>
                            <option value="down">Síndrome de Down</option>
                            <option value="tea">Transtorno do Espectro Autista (TEA)</option>
                            <option value="tdah">Transtorno do déficit de atenção com hiperatividade (TDAH)</option>
                        </select>
                    </div>
                    <br>
                    <div class="pne-necessidade" id="pne">
                        <h6>Possui algum tipo de necessidade especial?</h6>
                    </div>
                    <div class="necessidade" id="pne">
                        <select name="necessidades" id="necessidades">
                            <option value="">Não</option>
                            <option value="1">Comunicação visual.</option>
                            <option value="2">Transporte acessível.</option>
                            <option value="3">Suporte Social e Emocional.</option>
                            <option value="4">Auxílio de bengalas.</option>
                            <option value="5">Apoio na mobilidade.</option>
                            <option value="6">Apoio social ou psicológico.</option>
                            <option value="7">Apoio familiar.</option>
                            <option value="8">Tecnologia assistiva.</option>
                            <option value="9">Acessibilidade digital. </option>
                            <option value="10">Ambientes estruturados.</option>
                            <option value="11">Apoio na comunicação.</option>
                        </select>
                    </div>
                </div>
                <div class="continue-button">
                    <button type="submit" id="botaoContinuar"><a href="login.html">Continuar</a></button>
                    <dialog id="notifica"></dialog>
                    <div id="exibe"></div>
                </div>

            </form>
        </div>
    </div>
    <div id="resultado">
    </div>
    <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
    </div>
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script src="js/libras.js"></script>
    <script src="js/formulario.js"></script>
</body>

</html>