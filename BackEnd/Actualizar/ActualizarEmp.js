import {Empleado} from "../Clases/Empleado"
const botonAct = document.getElementById("ActualizarBtnEmp")
const idEmpleado = document.getElementById("id-emp-Act").value;
const Em_Nombre=document.getElementById("EM_Nombre").value;
const Em_p_apellido=document.getElementById("EM_P-apellido").value;
const Em_m_apellido=document.getElementById("EM_M-apellido").value;
const Em_edad=document.getElementById("EM_Edadid").value;
const salario=document.getElementById("Salario").value;
const puesto=document.getElementById("Puesto").value;

const ActualizarDatos = () => {

    let empleado = new Empleado(Em_Nombre, Em_p_apellido,Em_m_apellido, Em_edad, salario, puesto )
    let empleadojson = JSON.stringify(empleado);
    try{
        fetch(`http://localhost:3000/updateE/${idEmpleado.value}`, {
            method : "put",
            body : empleadojson
        })

    }catch(e){

        alert(e);
    }
}

botonAct.addEventListener("click", ActualizarDatos());
