const idEstudiante = document.getElementById("id-emp-Elim");
const btn = document.getElementById("BtnEliminarEmp");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        fetch(`http://localhost:3000/eliminarEm/${idEstudiante.value}`, {

            method: "delete"
        })

    } catch (error) {
        alert(error);
    }
})