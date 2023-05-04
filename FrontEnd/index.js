const btn_E=document.getElementById("btn_E");

const E_Nombre=document.getElementById("E_Nombre");
const E_p_apellido=document.getElementById("E_P-apellido");
const E_s_apellido=document.getElementById("E_M-apellido");
const E_edad=document.getElementById("E_Edadid");
const semestre=document.getElementById("Semestre");
const universidad=document.getElementById("Universidad");


const enviarEstudiante=(event)=>{
    event.preventDefault();
    const Estudiante={
        nombre:E_Nombre.value,
        primer_apellido:E_p_apellido.value,
        segundo_apellido:E_s_apellido.value,
        edad:E_edad.value,
        semestre:semestre.value,
        universidad:universidad.value
    };
    
    let JsonStuden=JSON.stringify(Estudiante);
    console.log(JsonStuden);
    /*
  fetch("http://localhost:3000/Estudiante",{
    method:"post",
    body:JsonStuden
  });
*/
};

btn_E.addEventListener("click",enviarEstudiante);


//------>--------->----------->-------------->------------->--------->------------->


const btn_Em=document.getElementById("btn_Em");

const Em_Nombre=document.getElementById("EM_Nombre");
const Em_p_apellido=document.getElementById("EM_P-apellido");
const Em_s_apellido=document.getElementById("EM_M-apellido");
const Em_edad=document.getElementById("EM_Edadid");
const salario=document.getElementById("Salario");
const puesto=document.getElementById("Puesto");

const EnviarEmpleado=()=>{
    const Empleado={
        nombre:Em_Nombre.value,
        primer_apellido:Em_p_apellido.value,
        segundo_apellido:Em_s_apellido.value,
        edad:Em_edad.value,
        salario:salario.value,
        puesto:puesto.value
    };

   let JsonEmpleado=JSON.stringify(Empleado);

   fetch("http://localhost:3000/Empleado",{
    method:"post",
    body:JsonEmpleado
   });
   
};
btn_Em.addEventListener("click",EnviarEmpleado);
