/**Cria a conexão com banco de dados! */
function criarConexao() {
    const mysql = require('mysql')
    const conection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'banco'
    })

    conection.connect((err) => {
        if (err) throw err
        console.log('cenectado!')
    })

    return conection;
}


/**Interrompe a conexão com o banco de dados! */
function feixarConexao(conection) {
    console.log('desconectado!');
    conection.end();
}



/**Adicina o cliente na tabela! */
function inserirCliente(nome, data_nascimento, user, pass, cpf, rg) {
    const conection = criarConexao();

    const insert = "INSERT INTO cliente (id, nome, data_nascimento, user, pass, cpf, rg) VALUES (NULL ,'" + nome + "' ,'" + data_nascimento + "' ,'" + user + "' ,'" + pass + "' ,'" + cpf + "','" + rg + "')"
    conection.query(insert, (err, rows) => {
        if (err) throw err
    })
    mostrarDadosCliente();
    feixarConexao(conection);
}

/**
inserirCliente("Frnacisca Melo", "1991-11-30", "root", "admin", "923.456.689-03", "9034563")
**/


/**Mostra os dados da tabela cliente! */
function mostrarDadosCliente() {
    const conection = criarConexao();
    conection.query('SELECT * from cliente', (err, rows) => {
        if (err) throw err
        console.log('Os dados da tabela são esses!')
        console.log(rows)
    })
    feixarConexao(conection);
}



function inserirDeveloper() {
    var nome = "Hugo";
    var email = "lkjslkjls@2020";
    var password = "654654698";

    /** 
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    **/
    var conection = criarConexao();

    const insert = "INSERT INTO developer(id, nome, email, password) VALUES (NULL, '" + nome + "', '" + email + "', '" + password + "')"
    conection.query(insert, (err, rows) => {
        if (err) throw err
    })

    feixarConexao(conection);
}

function alerta() {
    var nome = "";
    nome = String(document.getElementById('password').value);
    alert(nome);
}


/**
 * mostrarDadosCliente();
 * 
 **/
inserirDeveloper();
