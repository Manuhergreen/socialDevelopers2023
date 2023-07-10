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
    _id: '',
    id_user: '',
    name: '',
    lastname: '',
    image_profile: '',
    email:'',
    description: '',
    enlace_git: '',
    enlace_linkedin: '',
  }

  constructor(private http:HttpClient) { }

  getUserList(Pagina:string) {
    return this.http.get(`${this.db_urlPerfil}/${Pagina}`)
  }

  getUserProfileById(id:string) {
    return this.http.get(`${this.db_urlPerfil}/${id}`)
  }

  newPerfil(user:userProfileI){
    //  console.log(user);
     return this.http.post(`${this.db_urlPerfil}`, user)
  }

  deletePerfil (id:string) {
    console.log('borro');
    return this.http.delete(`${this.db_urlPerfil}/${id}`)
  }

  updatePerfil(id:string, user:userProfileI){
    //  console.log(user);
     return this.http.put(`${this.db_urlPerfil}/${id}`, user)
  }

 getUserProfile(){
    let user = JSON.parse(String(localStorage.getItem('userProfile')));
    return user;
  }

}
