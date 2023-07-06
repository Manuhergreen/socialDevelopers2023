import { Injectable } from '@angular/core';
import { userI } from '../model/social.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  db_url: string= "http://localhost:3000";

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

  
}