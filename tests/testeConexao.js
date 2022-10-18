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
let resultado = conexao.query("SELECT * FROM funcionarios");

console.log(resultado);
