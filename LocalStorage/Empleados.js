const btn_Em=document.getElementById("btn_Em");

const Em_Nombre=document.getElementById("EM_Nombre");
const Em_p_apellido=document.getElementById("EM_P-apellido");
const Em_s_apellido=document.getElementById("EM_M-apellido");
const Em_edad=document.getElementById("EM_Edadid");
const salario=document.getElementById("Salario");
const puesto=document.getElementById("Puesto");

const AgregarEmpleado=()=>{
    const Empleado={
        nombre:Em_Nombre.value,
        primer_apellido:Em_p_apellido.value,
        segundo_apellido:Em_s_apellido.value,
        edad:Em_edad.value,
        salario:salario.value,
        puesto:puesto.value
    };

    const ObjetoEmpleado=JSON.stringify(Empleado);
    localStorage.setItem("Empleado",ObjetoEmpleado);
   
};
btn_Em.addEventListener("click",AgregarEmpleado);

