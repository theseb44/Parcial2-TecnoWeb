const idEstudiante = document.getElementById("id-est-Elim");
const btn = document.getElementById("BtnEliminarEst");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        fetch(`http://localhost:3000/eliminarE/${idEstudiante.value}`, {

            method: "delete"
        })

    } catch (error) {
        alert(error);
    }
})