import {RespuestaBDNotificacion} from "../alert.js"
const idEstudiante = document.getElementById("id-est-Elim");
const btn = document.getElementById("BtnEliminarEst");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        fetch(`http://localhost:3000/eliminarE/${idEstudiante.value}`, {

            method: "delete"
        }).then(response => {
            RespuestaBDNotificacion(response.ok, "Los datos se han eliminado correctamente", "ha habido un error la eliminacion de datos" )
            
        })

    } catch (error) {
        alert(error);
    }
})