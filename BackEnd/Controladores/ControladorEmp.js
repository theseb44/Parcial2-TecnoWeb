import { Empleado} from "../Clases/Empleado.js"

//const btn_Em=document.getElementById("btn_Em"); 

const nombre = document.getElementById("EM_Nombre")
const m_apellido = document.getElementById("EM_P-apellido")
const p_apellido = document.getElementById("EM_M-apellido")
const edad = document.getElementById("EM_Edadid")
const salario = document.getElementById("Salario")
const puesto= document.getElementById("Puesto")
let con = 0;
/*
function esperaClick() {
    return new Promise((resolve, reject) => {
      const elemento = document.getElementById('btn_Em');
      elemento.addEventListener('click', (e) => {
        e.preventDefault();
        resolve();
      });
      elemento.addEventListener('error', (evento) => {
        reject(evento);
      });
    });
  }
   
 async function miFuncion() {
    console.log('Esperando clic...');
    await esperaClick();
    console.log('Se ha hecho clic');
   const empleado = new Empleado(con++,nombre.value,m_apellido.value,p_apellido.value,edad.value,salario.value,puesto.value);
   Module.Exports=empleado;
  }
  miFuncion();

*/

/*
btn_Em.addEventListener("click",(e)=>{
    e.preventDefault();
    let Empleado = new Empe(con++,nombre.value,m_apellido.value,p_apellido.value,edad.value,salario.value,puesto.value);
    console.log(Empleado);
});

*/