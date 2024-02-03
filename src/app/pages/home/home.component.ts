import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //propiedades
  nombre:string = 'Alejandro';
  apellido:string = '';
  calificacion:number = 8;
  encendido:boolean = true;

  personas:string[] = ['Juan', 'Pedro', 'Luisa', 'Marta', 'Jorge'];

  constructor(){}

  //método que cambia los valores de las propiedades
  cambiarValores(){
    this.nombre = "Juan";
    this.calificacion = 10;
    this.encendido = false;
  }

}
