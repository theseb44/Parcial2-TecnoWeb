import { Estudiante } from "../BackEnd/Clases/Estudiante";
const btn_E=document.getElementById("btn_E");

const E_Nombre=document.getElementById("E_Nombre");
const E_p_apellido=document.getElementById("E_P-apellido");
const E_s_apellido=document.getElementById("E_M-apellido");
const E_edad=document.getElementById("E_Edadid");
const semestre=document.getElementById("Semestre");
const universidad=document.getElementById("Universidad");

const AgregarEstudiante=()=>{
    let estudiante = new Estudiante(E_Nombre, E_p_apellido, E_s_apellido, E_edad, semestre, universidad);
    
    const ObjetoEstudiante=JSON.stringify(estudiante);
    localStorage.setItem("Estudiante",ObjetoEstudiante);
   
}

btn_E.addEventListener("click",AgregarEstudiante);
