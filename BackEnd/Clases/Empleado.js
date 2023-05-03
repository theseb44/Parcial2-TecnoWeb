import { Persona } from "./Persona.js";



export class Empleado extends Persona {

    constructor( nombre, apellido_paterno, apellido_materno, edad, salario, puesto_trabajo ){

        super( nombre, apellido_paterno, apellido_materno, edad );
        this.salario = salario;
        this.puesto_trabajo = puesto_trabajo;
    }

}