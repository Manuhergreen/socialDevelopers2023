import { ServicesService } from 'src/app/services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userProfileI, userI } from 'src/app/model/social.models';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})

export class PerfilUsuarioComponent implements OnInit {
  perfilForm!: FormGroup;
  submitted: boolean = false;
  errors: any;

  UserDetail!: userProfileI ; 
  newPerfil!: userProfileI ; 

  userData!: userI;
  nameF:string = "";
  lastnameF:string = "";
  emailF:string = "";
  idF?:string = "";
  enlace_gitF: string = "";
  enlace_linkedinF: string= "";
  id_userF: string = "";
  image_profileF: string = "";
  descriptionF: string = "";

  constructor( private form: FormBuilder, public perfilApi: PerfilService, private authApi: ServicesService,private router:Router){}

  ngOnInit(){
    this.perfilForm = this.form.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      image_profile: ["" ],
      email: ["", [Validators.required]],
      description: ["", [Validators.required]],
      enlace_git: [""],
      enlace_linkedin: [""]
    })

    this.userData = this.authApi.getUser();
    this.nameF = this.userData.name;
    this.lastnameF = this.userData.lastname;
    this.emailF = this.userData.email;
    this.idF = this.userData._id;
  
    this.perfilForm.valueChanges.subscribe((data) => {
      this.newPerfil = data;
      // console.log("cambio");
    })

    this.perfilApi.getUserProfileById(this.idF!).subscribe((data:any) => {
      // console.log(data)
      if (data)
       {
         this.UserDetail = data[0];

         this.nameF = this.UserDetail.name;
         this.lastnameF = this.UserDetail.lastname;
         this.emailF = this.UserDetail.email;
         this.idF = this.UserDetail._id;
         this.enlace_gitF = this.UserDetail.enlace_git;
         this.enlace_linkedinF= this.UserDetail.enlace_linkedin;
         this.id_userF = this.UserDetail.id_user;
         this.image_profileF = this.UserDetail.image_profile;
         this.descriptionF = this.UserDetail.description;
         localStorage.setItem('userProfile',JSON.stringify(this.UserDetail))
       }  
    })
  }

  onSubmit()
  {
    // console.log(this.perfilForm.value);
    this.submitted=true;

    // console.log(this.perfilForm.valid);
    if (this.perfilForm.valid){
      // console.log('envio datos');
      let user: userProfileI = {...this.perfilForm.value, id_user:this.idF};
      
      this.perfilApi.newPerfil(user).subscribe(
        (data:any) => {
          // console.log(data)
          this.router.navigate(['/areaPersonal']);
        },
        (error) => {
          this.errors = error;
        }
      )
    }
  }

  updateUser(){
    let user: userProfileI = {...this.perfilForm.value, id_user:this.idF};
    this.perfilApi.updatePerfil(this.idF!, user);
    this.router.navigate(['/areaPersonal']);
  }

  deleteUser(){
    this.perfilApi.deletePerfil(this.idF!);
    localStorage.removeItem('userProfile');
    this.router.navigate(['/areaPersonal']);
  }
}
