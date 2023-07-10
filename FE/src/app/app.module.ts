import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/registro/registro.component';
import { AreaPersonalComponent } from './pages/area-personal/area-personal.component';
import { PerfilUsuarioComponent} from './pages/area-personal/perfil-usuario/perfil-usuario.component';
import { SubidaProyectosComponent } from './pages/area-personal/subida-proyectos/subida-proyectos.component';
import { ListadoProyectosComponent } from './pages/listado-proyectos/listado-proyectos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FichaDeProyectoComponent } from './pages/listado-proyectos/ficha-de-proyecto/ficha-de-proyecto.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AreaPersonalComponent,
    PerfilUsuarioComponent,
    SubidaProyectosComponent,
    ListadoProyectosComponent,
    NoticiasComponent,

    FichaDeProyectoComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
