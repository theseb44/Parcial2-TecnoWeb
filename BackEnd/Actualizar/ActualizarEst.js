import {Estudiante} from "../Clases/Estudiante.js"
const botonact = document.getElementById("ActualizarbtnEst");
const idEstudiante = document.getElementById("id-est-Act")
const E_Nombre=document.getElementById("E_Nombre")
const E_p_apellido=document.getElementById("E_P-apellido")
const E_m_apellido=document.getElementById("E_M-apellido")
const E_edad=document.getElementById("E_Edadid")
const semestre=document.getElementById("Semestre")
const universidad=document.getElementById("Universidad")

const ActualizarDatos = (e) => {
    e.preventDefault();
    console.log(E_Nombre.value);
    let estudiante = new Estudiante(E_Nombre.value, E_p_apellido.value,E_m_apellido.value, E_edad.value, semestre.value, universidad.value )
    let estudiantejson = JSON.stringify(estudiante);
    console.log(estudiantejson);
    try{
        fetch(`http://localhost:3000/updateE/${idEstudiante.value}`, {
            method : "put",
            body : estudiantejson
        }).then(response => {
            if (response.ok) {
              alert("Los datos se han actualizado correctamente");
            } else {
              alert("Ha habido un error al actualizar los datos");
            }
          })

    }catch(error){

        alert(error);
    }
}

botonact.addEventListener("click",ActualizarDatos);
