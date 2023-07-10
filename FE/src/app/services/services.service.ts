import { Injectable } from '@angular/core';
import { userI } from '../model/social.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  db_url: string= "http://localhost:5200/user";
  

  public userData: userI ={
    id: '',
    name: '',
    lastname: '',
    email:'',
    password:'',
    role:''
  }
  
  constructor(private http:HttpClient) {}

 

  register(user:userI){
    return this.http.post(`${this.db_url}/register`, user)
  }

  login(user:userI){
    return this.http.post(`${this.db_url}/login`, user)
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getNombre(){
    let user = JSON.parse(String(localStorage.getItem('user')));
    // console.log('nombre:', user.name);
    return user?.name;
  }
  
}







