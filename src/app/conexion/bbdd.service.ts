import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

//Creo una interfaz con el formato de cada uno de los elementos
//Los campos deben ser o mismo que en la BBDD
export interface Empleado{ nombre:string, apellidos:string, departamento:string };

@Injectable({
  providedIn: 'root'
})
export class BbddService {


private elementosColeccion:AngularFirestoreCollection<Empleado>;
//Es para trabajar con un elemento de la colección
private accesoElemento:AngularFirestoreDocument<Empleado>;

  persona: Observable<any[]>;
  constructor(private db: AngularFirestore) { 
    //Establece yba conexión con la BBDD según la intefaz que he creado
    this.elementosColeccion = db.collection<Empleado>('Empleados');
    this.persona = this.elementosColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Empleado;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  public anyadeEmpleado(nuevoEmpleado:Empleado){
    this.elementosColeccion.add(nuevoEmpleado);
  }

  public borraEmpleado(borraEmpleado){
    this.accesoElemento = this.db.doc<Empleado>(`Empleados/${borraEmpleado.id}`);
    this.accesoElemento.delete();
  }
  
  public actualizaEmpleado(actualizaEmpleado){
    this.accesoElemento = this.db.doc<Empleado>(`Empleados/${actualizaEmpleado.id}`);
    this.accesoElemento.update(actualizaEmpleado);
  }

  //Utilizo esta función para mostrarlo
  public muestraPersonas(){
    return this.persona;
  }
}
