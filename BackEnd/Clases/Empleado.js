import { Persona } from "./Persona.js";



export class Empleado extends Persona {

    constructor(id, nombre, apellido_paterno, apellido_materno, edad, salario, puesto_trabajo ){

        super(id, nombre, apellido_paterno, apellido_materno, edad );
        this.salario = salario;
        this.puesto_trabajo = puesto_trabajo;
    }

}