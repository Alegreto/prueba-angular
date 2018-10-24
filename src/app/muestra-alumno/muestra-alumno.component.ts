import { Component, OnInit } from '@angular/core';
import { Alumno} from '../modelo/alumno.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-muestra-alumno',
  templateUrl: './muestra-alumno.component.html',
  styleUrls: ['./muestra-alumno.component.css']
})
export class MuestraAlumnoComponent implements OnInit {

  colores: string = 'amarillo, rojo, azul';
  saludo:string = 'Hola, te saludo desde alumnos';
  puntuacion = 9;
  //Esta variable va a almacenar valores desde un ngModel
  textoUser:string;
  //Variable para comprobar con ngIf
  fechaActual:string = Date();
  nombre:string = null;
  botonPulsado:boolean = false;
  alumno1 = new Alumno(1, 'Juan', 'Gómez', 'Madrid' );
  alumnos:Alumno[] = [new Alumno(2, 'Pepe', 'Gotera', 'Coslada'),
                      new Alumno(3, 'Filemon', 'Pi', 'Cercedilla'),
                      new Alumno(4, 'Rompetechos', 'Gómez', 'Pinto'),
                      ];
 


  constructor() { }

  ngOnInit() {
   console.log('ok');
   $(document).ready(function(){
     $('#demo').click(function(){
      alert("Pulsaste el botón");
     });
     console.log('ok2!');
   })
  }
  

  getPuntuacion(){
    return this.puntuacion;
  }

  getName(){
    console.log(this.textoUser);
  }

}
