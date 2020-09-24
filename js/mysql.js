/**Cria a conexão com banco de dados! */
const mysql = require('mysql')
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'banco'
})


/**Informa no teminal se a conexão foi estabelecida! */
conection.connect( (err) => {
    if(err) throw err
        console.log('cenectado!')
})



/**Adicina o cliente na tabela! */
function inserir_cliente(nome, data_nascimento, user, pass, cpf, rg) {    
    const insert = "INSERT INTO cliente (id, nome, data_nascimento, user, pass, cpf, rg) VALUES (NULL ,'" + nome + "' ,'" + data_nascimento + "' ,'" + user + "' ,'" + pass + "' ,'" + cpf + "','" + rg + "')"
    conection.query(insert, (err, rows) =>{
        if(err) throw err
})}

inserir_cliente("Frnacisca Carvalho", "1997-12-30", "root", "admin", "923.456.789-03", "9234563")

/**Mostra os dados da tabela cliente! */
conection.query('SELECT * from cliente', (err, rows) =>{
    if(err) throw err
    console.log('Os dados da tabela são esses!')
    console.log(rows)
})

/**Interrompe a conexão com o banco de dados! */
conection.end()