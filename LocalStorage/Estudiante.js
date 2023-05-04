import { Estudiante } from "../BackEnd/Clases/Estudiante.js";
const btn_E=document.getElementById("btn_E");

const E_Nombre=document.getElementById("E_Nombre");
const E_p_apellido=document.getElementById("E_P-apellido");
const E_s_apellido=document.getElementById("E_M-apellido");
const E_edad=document.getElementById("E_Edadid");
const semestre=document.getElementById("Semestre");
const universidad=document.getElementById("Universidad");

const AgregarEstudiante=(e)=>{
    e.preventDefault();
    let estudiante = new Estudiante(E_Nombre.value, E_p_apellido.value, E_s_apellido.value, E_edad.value, semestre.value, universidad.value);
    const ObjetoEstudiante=JSON.stringify(estudiante);
    console.log(ObjetoEstudiante);
    localStorage.setItem("Estudiante",ObjetoEstudiante);
   
}

btn_E.addEventListener("click",AgregarEstudiante);
