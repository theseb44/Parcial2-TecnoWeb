import { Persona } from "./Persona.js";


export class Estudiante extends Persona {

    constructor( nombre, apellido_paterno, apellido_materno, edad, semestre, universidad ){

        super( nombre, apellido_paterno, apellido_materno, edad );
        this.semestre = semestre;
        this.universidad = universidad;
    }

    
}
