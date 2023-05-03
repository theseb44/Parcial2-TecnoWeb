const idEstudiante = document.getElementById("id-est-Elim");
const btn = document.getElementById("BtnEliminarEst");


btn.addEventListener("click", () => {

    try {
        fetch(`http://localhost:3000/eliminarE/${idEstudiante.value}`, {

            method: "delete"
        })

    } catch (e) {
        alert(e);
    }
})