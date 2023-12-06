//Archivo de configuracion para la base de datos
//Importar e modulo mysql
const mysql = require('mysql')

//Crear conexion con mysql
const conexion = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'hospital'
})

conexion.connect(function (error){
     if(error){
          console.log(`Ocurrio un error en la conexion ${error}`)
          return;
     } else {
          console.log(`Conexion exitosa`)
     }
})

module.exports = {conexion}