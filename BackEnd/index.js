const express = require('express');
const sql=require("mysql");
const app = express()
const port = 3000

app.use(express.json({
    type:"*/*"
}));

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
//conexion.end();

// ------------eliminar por id------------------- 
app.delete('/eliminarE/:id',(req,res)=>{
    const userid=req.params.id;
    const sql=`DELETE FROM estudiante WHERE id = ${userid}`;
    conexion.query(sql,(error)=>{
        if (error) throw error;
        res.send("listo");
    })
})

app.delete('/eliminarEm/:id',(req,res)=>{
    const userid=req.params.id;
    const sql=`DELETE FROM empleado WHERE id = ${userid}`;
    conexion.query(sql,(error)=>{
        if (error) throw error;
        res.send("listo");
    })
})





//-----------Actualizar base de datos---------------------
app.put('/updateE/:id',(req,res)=>{
    const userid=req.params.id;
    const datos=req.body;
    
    const sql=`UPDATE estudiante SET nombre='${datos.nombre}',p_apellido='${datos.primer_apellido}',s_apellido='${datos.segundo_apellido}',edad='${datos.edad}',semestre='${datos.semestre}',uni='${datos.universidad}' WHERE id =${userid}`;
    conexion.query(sql,(error)=>{
        if (error) throw error;
        res.send("listo");
    })

})

app.put('/updateEm/:id',(req,res)=>{
    const userid=req.params.id;
    const datos=req.body;
    
    const sql=`UPDATE empleados SET nombre='${datos.nombre}',p_apellido='${datos.primer_apellido}',s_apellido='${datos.segundo_apellido}',edad='${datos.edad}',salario='${datos.salario}',puesta='${datos.puesto}' WHERE id =${userid}`;
    conexion.query(sql,(error)=>{
        if (error) throw error;
        res.send("listo");
    })

})

//--------------------------------------------------------------------------------------
// ---------------Buscar por id en base de datos----------------
app.get('/Estudiantes/:id',(req,res)=>{
    const userid=req.params.id;
    const sql=`SELECT * FROM estudiante WHERE id='${userid}'`;
    conexion.query(sql,(error,results,fields)=>{
        if (error) throw error;
        res.send(results);
    })
})

app.get('/Empleados/:id',(req,res)=>{
    const userid=req.params.id;
    const sql=`SELECT * FROM empleados WHERE id='${userid}'`;
    conexion.query(sql,(error,results,fields)=>{
        if (error) throw error;
        res.send(results);
    })
})

//---------------------------------------------------------------------
//-----------Mostrar todo los valores de la base de datos----------------
app.get('/EstudianteTodos',(req,res)=>{
    const sqlPeticionEst = 'SELECT * FROM estudiante';
    conexion.query(sqlPeticionEst, (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});

app.get('/EmpleadoTodos',(req,res)=>{
    const sqlPeticionEmp = 'SELECT * FROM empleados';
    conexion.query(sqlPeticionEmp, (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});

//-------------POST Agregar a la base de datos----------------------
app.post('/Estudiante', (req, res) => {
    console.log("usando push puta");
    const data=req.body;
    
    const sql = `INSERT INTO estudiante (nombre, p_apellido	, s_apellido, edad, semestre, uni) VALUES ('${data.nombre}', '${data.primer_apellido}', 
    '${data.segundo_apellido}', '${data.edad}', '${data.semestre}', '${data.universidad}')`;

    conexion.query(sql, (error,results)=>{
    if (error) throw error;
    res.send('Usuario creado correctamente');
    })
    
});

app.post('/Empleados', (req, res) => {
    console.log("usando push puta");
    const data=req.body;
    
    const sql = `INSERT INTO empleados (nombre, p_apellido	, s_apellido, edad, salario, puesta) VALUES ('${data.nombre}', '${data.primer_apellido}', 
    '${data.segundo_apellido}', '${data.edad}', '${data.salario}', '${data.puesta}')`;

    conexion.query(sql, (error,results)=>{
    if (error) throw error;
    res.send('Usuario creado correctamente');
    })
    
});
//--------------------------------------------------------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


