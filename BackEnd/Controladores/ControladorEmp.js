import { Empleado } from "../Clases/Empleado"

const nombre = document.getElementById("EM_Nombre")
const m_apellido = document.getElementById("EM_P-apellido")
const p_apellido = document.getElementById("EM_M-apellido")
const edad = document.getElementById("EM_Edadid")
const salario = document.getElementById("Salario")
const puesto= document.getElementById("Puesto")
let con = 0;

export const objEstudiante = () => {

    let empleado = new Empleado(con++,nombre,p_apellido,m_apellido,edad,salario,puesto);
    return empleado;
}