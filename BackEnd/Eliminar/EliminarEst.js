const idEstudiante = document.getElementById("id-est-Elim");
const btn = document.getElementById("BtnEliminarEst");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        fetch(`http://localhost:3000/eliminarE/${idEstudiante.value}`, {

            method: "delete"
        }).then(response => {
            if (response.ok) {
              alert("Los datos se han eliminado correctamente");
            } else {
              alert("Ha habido un error al eliminar los datos");
            }
          })

    } catch (error) {
        alert(error);
    }
})