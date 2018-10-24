import { Component, OnInit } from '@angular/core';
//Me traigo el servicio que he creado para poder hacer una colección
import{BbddService} from '../conexion/bbdd.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  //Creo una variable para recibir los empleados
  empleados:any;

  //Inicializo con el nombre de los campos de la BBDD
  nuevoEmpleado:any = {
    nombre: '',
    apellidos: '',
    departamento: ''
  };

  //Voy a cargar aquí los datosdel empleado a actualizar
  actualizoEmpleado:any = {
    nombre: '',
    apellidos: '',
    departamento: ''
  };

  constructor(private conexion:BbddService) {
    //Con la conexión llamo a las personas 
    this.conexion.muestraPersonas().subscribe(empleado =>{this.empleados = empleado});
  }

  ngOnInit() {
  }

  //Declaro la función que agrega empleados y que llama a la función anuadeEmpleado
  agregarEmpleado(){
    if(this.nuevoEmpleado.nombre != '' || this.nuevoEmpleado.apellidos != '' || this.nuevoEmpleado.departamento != ''){
      this.conexion.anyadeEmpleado(this.nuevoEmpleado);
      this.nuevoEmpleado.nombre = '';
      this.nuevoEmpleado.apellidos = '';
      this.nuevoEmpleado.departamento = '';
    }
    else{
      console.log("Alguno de los campos esta vacío");
      
    }
  }

  cargarEmpleado(item){
    console.log(item);
    this.actualizoEmpleado = item;
  }

  actualizarEmpleado(item){
    this.conexion.actualizaEmpleado(this.actualizoEmpleado);
  }


  //Mediante la conexión llamas a borraEmpleado y le paso el empleado a borrar
  borrarEmpleado(item){
    this.conexion.borraEmpleado(item);
  }

}
