import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userProfileI } from 'src/app/model/social.models';
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

  newPerfil!: userProfileI ; 

  constructor( private form: FormBuilder, private perfilApi: PerfilService, private router:Router){}

  ngOnInit(){
    this.perfilForm = this.form.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      image_profile: ["" ],
      email: ["", [Validators.required]],
      description: ["", [Validators.required]],
      enlaceGit: [""],
      enlace_linkedin: [""]
    })

    this.perfilForm.valueChanges.subscribe((data) => {
      this.newPerfil = data;
      // console.log("cambio");
    })
  }

  onSubmit()
  {
    console.log(this.perfilForm.value);
    this.submitted=true;

    console.log(this.perfilForm.valid);
    if (this.perfilForm.valid){
      console.log('envio datos');
      let user: userProfileI = this.perfilForm.value;
      this.perfilApi.newPerfil(user).subscribe(
        (data:any) => {
          // console.log(data)
          // this.router.navigate(['/login']);
        },
        (error) => {
          this.errors = error;
        }
      )
    }
    
  }
}
