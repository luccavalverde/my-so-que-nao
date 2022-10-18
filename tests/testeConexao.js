//importar sequelize
const sequelize = require('sequelize');
//criar um objeto contendo os dados da conexao
const config = {
    username: "root",
    password: "",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    database: "osmaker"
}
//cria a conexao
const conexao = new sequelize(config);
//realizar consultas(assincronas)
let promise = conexao.query("SELECT * FROM funcionarios");

//forma 1 de lidar com promeses: callbacks
promise.then(
    data => {console.log(data)}
)
console.log(promise);
