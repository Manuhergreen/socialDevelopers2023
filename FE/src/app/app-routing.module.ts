import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoProyectosComponent } from './pages/listado-proyectos/listado-proyectos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { AreaPersonalComponent } from './pages/area-personal/area-personal.component';
import { RegisterComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilUsuarioComponent } from './pages/area-personal/perfil-usuario/perfil-usuario.component';
import { SubidaProyectosComponent } from './pages/area-personal/subida-proyectos/subida-proyectos.component';
import { FichaDeProyectoComponent } from './pages/listado-proyectos/ficha-de-proyecto/ficha-de-proyecto.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { DetalleUsuarioComponent } from './pages/listado-usuarios/detalle-usuario/detalle-usuario.component';


const routes: Routes = [
  {path: "",component:HomeComponent },
  {path: "projects",component:ListadoProyectosComponent },
  {path: "news",component:NoticiasComponent },

  {path: "areaPersonal",component:AreaPersonalComponent },
  {path: "register",component:RegisterComponent },
  {path: "login",component:LoginComponent },
  {path: "perfil", component: PerfilUsuarioComponent},
  {path: "subidaProyectos", component:SubidaProyectosComponent},
  
  {path: "projects/:id", component:FichaDeProyectoComponent},
  {path: "listadoUsuarios", component:ListadoUsuariosComponent},
  {path: "detalle-usuario", component:DetalleUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
