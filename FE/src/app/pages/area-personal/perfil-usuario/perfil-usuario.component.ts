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
  enlaceGitF: string = "";
  enlaceLinkedinF: string= "";
  idUserF: string = "";
  imagenF: string = "";
  descriptionF: string = "";

  constructor( private form: FormBuilder, public perfilApi: PerfilService, private authApi: ServicesService,private router:Router){}

  ngOnInit(){
    this.perfilForm = this.form.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      imagen: ["" ],
      email: ["", [Validators.required]],
      description: ["", [Validators.required]],
      enlaceGit: [""],
      enlaceLinkedin: [""]
    })

    // recupero los datos del login
    this.userData = this.authApi.getUser();
    this.nameF = this.userData.name;
    this.lastnameF = this.userData.lastname;
    this.emailF = this.userData.email;
    this.idF = this.userData._id;

    // miro a ver si el usuario esta dado de alta en la parte personal.
    this.perfilApi.getUserProfileById(this.idF!).subscribe((data:any) => {
      // console.log(data)
      if (data)
       {
         this.UserDetail = data[0];

         this.nameF = this.UserDetail.name;
         this.lastnameF = this.UserDetail.lastname;
         this.emailF = this.UserDetail.email;
         this.idF = this.UserDetail._id;
         this.enlaceGitF = this.UserDetail.enlaceGit;
         this.enlaceLinkedinF= this.UserDetail.enlaceLinkedin;
         this.idUserF = this.UserDetail.idUser;
         this.imagenF = this.UserDetail.imagen;
         this.descriptionF = this.UserDetail.description;
         localStorage.setItem('userProfile',JSON.stringify(this.UserDetail))
       }  
      else {

      } 
    })

    // me suscribo a cambios en el formulario
    this.perfilForm.valueChanges.subscribe((data) => {
      this.newPerfil = data;
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
