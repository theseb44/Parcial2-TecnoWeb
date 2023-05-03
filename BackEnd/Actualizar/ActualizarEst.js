import {Estudiante} from "../Clases/Estudiante"
const botonact = document.getElementById("ActualizarbtnEst");
const idEstudiante = document.getElementById("id-est-Act").value;
const E_Nombre=document.getElementById("E_Nombre").value;
const E_p_apellido=document.getElementById("E_P-apellido").value;
const E_m_apellido=document.getElementById("E_M-apellido").value;
const E_edad=document.getElementById("E_Edadid").value;
const semestre=document.getElementById("Semestre").value;
const universidad=document.getElementById("Universidad").value;

const ActualizarDatos = () => {

    let estudiante = new Estudiante(E_Nombre, E_p_apellido,E_m_apellido, E_edad, semestre, universidad )
    let estudiantejson = JSON.stringify(estudiante);
    try{
        fetch(`http://localhost:3000/updateE/${idEstudiante.value}`, {
            method : "put",
            body : estudiantejson
        })

    }catch(e){

        alert(e);
    }
}

botonact.addEventListener("click",ActualizarDatos());
