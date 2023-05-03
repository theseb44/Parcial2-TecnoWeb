const express = require('express');
const sql=require("mysql");
const json=require("./test");
const app = express()
const port = 3000

let conexion=sql.createConnection({
    host:"localhost",
    database: "proyecto-web-2",
    user:"root",
    password:""
});

conexion.connect((error)=>{
    if(error){
        console.log("ERROR DETECTADO");
    }else{
        console.log("CONEXION EXITOSA")
    }
});
// parar la conexion
conexion.end();


app.post('/Estudiante', (req, res) => {
    res.send('estamos on')
    console.log("usando push estudiante");
    const sql = `INSERT INTO usuarios (nombre, apellido, email) VALUES ('${json.nombre}', '${apellido}', '${email}')`;
    conexion.query(sql, (error,results)=>{
    if (error) throw error;
    res.send('Usuario creado correctamente');
    })
});

app.post('/Empleado',(req,res)=>{
res.send('estamos on');
console.log("usando push Empleado");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


