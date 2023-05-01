const btn_E=document.getElementById("btn_E");

const E_Nombre=document.getElementById("E_Nombre");
const E_p_apellido=document.getElementById("E_P-apellido");
const E_s_apellido=document.getElementById("E_M-apellido");
const E_edad=document.getElementById("E_Edadid");
const semestre=document.getElementById("Semestre");
const universidad=document.getElementById("Universidad");

const AgregarEstudiante=()=>{
    const Estudiante={
        nombre:E_Nombre.value,
        primer_apellido:E_p_apellido.value,
        segundo_apellido:E_s_apellido.value,
        edad:E_edad.value,
        semestre:semestre.value,
        universidad:universidad.value
    };
    
    const ObjetoEstudiante=JSON.stringify(Estudiante);
    localStorage.setItem("Estudiante",ObjetoEstudiante);
   
}

btn_E.addEventListener("click",AgregarEstudiante);
