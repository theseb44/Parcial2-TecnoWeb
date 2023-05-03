import { Estudiante } from "../Clases/Estudiante.js";

//const btn_E=document.getElementById("btn_E");
const nombre = document.getElementById("E_Nombre")
const m_apellido = document.getElementById("E_M-apellido")
const p_apellido = document.getElementById("E_P-apellido")
const edad = document.getElementById("E_Edadid")
const semestre = document.getElementById("Semestre")
const universidad = document.getElementById("Universidad")
let con = 0;
let n,apellido,sapellido,eda,semestr,uni;

function crearPersona() {  
    return JSON.stringify(new Estudiante(con,n,apellido,sapellido,eda,semestr,uni));
}

/*
btn_E.addEventListener("click",(e)=>{
    e.preventDefault();
    n=nombre.value;
    apellido=m_apellido.value;
    sapellido=p_apellido.value;
    eda=edad.value;
    semestr=semestre.value;
    uni=universidad.value;
    
});

export {crearPersona};
*/


