import {RespuestaBDNotificacion} from "../alert.js"
const idEstudiante = document.getElementById("id-emp-Elim");
const btn = document.getElementById("BtnEliminarEmp");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        fetch(`http://localhost:3000/eliminarEm/${idEstudiante.value}`, {

            method: "delete"
        }).then(response => {
            RespuestaBDNotificacion(response.ok, "Los datos se han eliminado correctamente", "ha habido un error la eliminacion de datos" )
            
        })

    } catch (error) {
        alert(error);
    }
})