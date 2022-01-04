import { EventEmitter, Injectable } from "@angular/core";
import { LoginService } from "./loginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas:Persona[]= [new Persona('Alexis', 'Hernandez'), 
    new Persona('Oscar', 'Diaz'), new Persona('Luis', 'Perez')];

    saludar= new EventEmitter<number>();

    constructor(private loginService:LoginService){}

    agregarPersona(persona:Persona){
    this.loginService.enviaMensajeAConsola("Agregamos Persona: "+ persona.nombre);
    this.personas.push(persona);
    }

}