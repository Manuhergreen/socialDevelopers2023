import { Injectable } from '@angular/core';
import { userProfileI } from '../model/social.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  db_urlPerfil: string = "http://localhost:5200/perfil";

  public userProfileData: userProfileI = {
    id: '',
    id_user: '',
    name: '',
    lastname: '',
    image_profile: '',
    email:'',
    addnews:false,
    description: '',
    enlace_git: '',
    enlace_linkedin: '',
  }

  constructor(private http:HttpClient) { }

  newPerfil(user:userProfileI){
     console.log(user);
     return this.http.post(`${this.db_urlPerfil}`, user)
  }
}
