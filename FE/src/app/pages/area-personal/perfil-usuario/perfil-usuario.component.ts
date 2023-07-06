import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userProfileI } from 'src/app/model/social.models';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})

export class PerfilUsuarioComponent {
  perfilForm!: FormGroup;
  submitted: boolean = false;
  errors: any;

  newPerfil!: userProfileI ; 

  constructor( private form: FormBuilder, private authApi: ServicesService, private router:Router){}


  onSubmit(){
    this.perfilForm = this.form.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: ["", [Validators.required]],
      category: ["", [Validators.required]],
    })
    this.perfilForm.valueChanges.subscribe((data) => {
      this.newPerfil = data;
    })
  }

}
