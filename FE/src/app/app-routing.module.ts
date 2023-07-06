import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoProyectosComponent } from './pages/listado-proyectos/listado-proyectos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { AreaPersonalComponent } from './pages/area-personal/area-personal.component';
import { RegisterComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "",component:HomeComponent },
  {path: "projects",component:ListadoProyectosComponent },
  {path: "news",component:NoticiasComponent },
  {path: "areaPersonal",component:AreaPersonalComponent },
  {path: "register",component:RegisterComponent },
  {path: "login",component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
