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

/**Interrompe a conexão com o banco de dados! */
conection.end()