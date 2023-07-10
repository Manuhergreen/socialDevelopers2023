import { ServicesService } from 'src/app/services/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userProfileI, userI } from 'src/app/model/social.models';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-area-personal',
  templateUrl: './area-personal.component.html',
  styleUrls: ['./area-personal.component.scss']
})
export class AreaPersonalComponent implements OnInit {
  UserDetail!: userProfileI ; 
  userData!: userI;
  idUserF: string = "";

  constructor( public perfilApi: PerfilService, private authApi: ServicesService,private router:Router){}

  ngOnInit(){
    // recupero los datos del login
    this.userData = this.authApi.getUser();
    this.idUserF = this.userData._id;

    // miro a ver si el usuario esta dado de alta en la parte personal.
    this.perfilApi.getUserProfileById(this.idUserF!).subscribe((data:any) => {
      if (data.length > 0)
       {
         this.UserDetail = data[0];
         localStorage.setItem('userProfile',JSON.stringify(this.UserDetail))
       }  
    })
  }
}
