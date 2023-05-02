const express = require('express')
const app = express()
const port = 3000

app.post('/Estudiante', (req, res) => {
    res.send('estamos on')
    console.log("usando push estudiante");
});

app.post('/Empleado',(req,res)=>{
res.send('estamos on');
console.log("usando push Empleado");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});