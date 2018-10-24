import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//1. Importo paquete para rutas
import {Routes, RouterModule} from '@angular/router';
//Importo paquete para formularios
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MuestraAlumnoComponent } from './muestra-alumno/muestra-alumno.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { DirectivaPropiaDirective } from './patron/directiva-propia.directive';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BbddService } from './conexion/bbdd.service';

//2. Declaro una constante para guardar ruta.
//El path es la dirección donde quieres ir y component el componente que quieres que se muesttre
const rutas: Routes =[
  {path: 'contacto', component: ContactoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'muestra', component: MuestraAlumnoComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MuestraAlumnoComponent,
    ContactoComponent,
    HomeComponent,
    DirectivaPropiaDirective,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importaciones Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    //3. Importo las rutas definidas
    RouterModule.forRoot(rutas)
  ],
  providers: [BbddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
