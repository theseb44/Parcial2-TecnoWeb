import {Empleado} from "../Clases/Empleado.js"
const botonAct = document.getElementById("ActualizarBtnEmp")
const idEmpleado = document.getElementById("id-emp-Act")
const Em_Nombre=document.getElementById("EM_Nombre")
const Em_p_apellido=document.getElementById("EM_P-apellido")
const Em_m_apellido=document.getElementById("EM_M-apellido")
const Em_edad=document.getElementById("EM_Edadid")
const salario=document.getElementById("Salario")
const puesto=document.getElementById("Puesto")

const ActualizarDatos = (e) => {
    e.preventDefault();
const idEmpleado = document.getElementById("id-emp-Act")
    let empleado = new Empleado(Em_Nombre.value, Em_p_apellido.value,Em_m_apellido.value, Em_edad.value, salario.value, puesto.value )
    let empleadojson = JSON.stringify(empleado);
    try{
        fetch(`http://localhost:3000/updateEm/${idEmpleado.value}`, {
            method : "put",
            body : empleadojson
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

botonAct.addEventListener("click", ActualizarDatos);
