const idEstudiante = document.getElementById("id-emp-Elim");
const btn = document.getElementById("BtnEliminarEmp");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        fetch(`http://localhost:3000/eliminarEm/${idEstudiante.value}`, {

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