import { Estudiante } from "../Clases/Estudiante.js"

const nombre = document.getElementById("E_Nombre")
const m_apellido = document.getElementById("E_M-apellido")
const p_apellido = document.getElementById("E_P-apellido")
const edad = document.getElementById("E_Edadid")
const semestre = document.getElementById("Semestre")
const universidad = document.getElementById("Universidad")
let con = 0;

export const objEstudiante = () => {

    let estudiante = new Estudiante(con++,nombre,p_apellido,m_apellido,edad,semestre,universidad);
    return estudiante;
}

