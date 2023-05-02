import { Persona } from "./Persona";

export class Estudiante extends Persona {

    constructor(id, nombre, apellido_paterno, apellido_materno, edad, semestre, universidad ){

        super(id, nombre, apellido_paterno, apellido_materno, edad );
        this.semestre = semestre;
        this.universidad = universidad;
    }

    
}