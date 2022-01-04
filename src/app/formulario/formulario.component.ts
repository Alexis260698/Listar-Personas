import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../loginService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada=new EventEmitter<Persona>();
 
  nombreInput:string;
  apellidoInput:string;


  constructor(private loginService:LoginService, 
    private personaService:PersonasService){

      this.personaService.saludar.subscribe((indice:number) => alert("El indice es: "+ indice));
    }

  agregarPersona(){
    let persona1= new Persona(this.nombreInput, this.apellidoInput);
    
    //this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }



}
