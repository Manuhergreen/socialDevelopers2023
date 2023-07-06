import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { userProfileI } from 'src/app/model/social.models';

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

  constructor( private form: FormBuilder, private authApi: ServicesService, private router:Router){}

  ngOnInit(){
    this.perfilForm = this.form.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      image_profile: ["" ],
      email: ["", [Validators.required]],
      description: ["", [Validators.required]],
      enlaceGit: [""],
      enlace_linkedin: [""],
    })

    this.perfilForm.valueChanges.subscribe((data) => {
      this.newPerfil = data;
      console.log("cambio");
    })
  }

  onSubmit()
  {
    
  }
}
