import {Empleado} from "../BackEnd/Clases/Empleado.js"
const btn_Em=document.getElementById("btn_Em");

const Em_Nombre=document.getElementById("EM_Nombre");
const Em_p_apellido=document.getElementById("EM_P-apellido");
const Em_s_apellido=document.getElementById("EM_M-apellido");
const Em_edad=document.getElementById("EM_Edadid");
const salario=document.getElementById("Salario");
const puesto=document.getElementById("Puesto");

const AgregarEmpleado=(e)=>{
    e.preventDefault();    

    let empleado = new Empleado(Em_Nombre.value, Em_p_apellido.value, Em_s_apellido.value, Em_edad.value, salario.value, puesto.value);
        console.log(empleado);
    const ObjetoEmpleado=JSON.stringify(empleado);
    localStorage.setItem("Empleado",ObjetoEmpleado);
   
};
btn_Em.addEventListener("click",AgregarEmpleado);

