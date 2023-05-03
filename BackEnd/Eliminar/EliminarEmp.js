const idEstudiante = document.getElementById("id-emp-Elim");
const btn = document.getElementById("BtnEliminarEmp");


btn.addEventListener("click", () => {

    try {
        fetch(`http://localhost:3000/eliminarE/${idEstudiante.value}`, {

            method: "delete"
        })

    } catch (e) {
        alert(e);
    }
})