import { json } from "express";

//const btn_E=document.getElementById("btn_E");

const estudiante = localStorage.getItem("Estudiante");
 

fetch("http://localhost:3000/Estudiante",{
        method:"post",
        /*
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          */
        body:JSON.stringify(estudiante)

    });

/*
let datos={
    nombre:"jose",
    edad:20
};



btn_E.addEventListener("click",()=>{
    const estudiante = localStorage.getItem("Estudiante");
    const jsonEstudi=JSON.parse(estudiante);    
    fetch("http://localhost:3000/Estudiante",{
        method:"post",
        body:JSON.stringify(datos)
    });


});

*/