import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projectsI } from '../model/social.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  db_urlProject: string = "http://localhost:5200/project";

  constructor(private http:HttpClient) { }

  getProjectList(Pagina:string) {
    return this.http.get(`${this.db_urlProject}/lista/${Pagina}`)
  }

  getProjectById(id:string) {
    return this.http.get(`${this.db_urlProject}/${id}`)
  }

  addProject(project:projectsI){
    //  console.log(user);
     return this.http.post(`${this.db_urlProject}`, project )
  }

  deleteProject (id:string) {
    console.log(`${this.db_urlProject}/${id}`)
    return this.http.delete(`${this.db_urlProject}/${id}`)
  }

  updateProject(id:string, project:projectsI){
     console.log(project);
     console.log(`${this.db_urlProject}/${id}`);
     return this.http.put(`${this.db_urlProject}/${id}`, project)
  }

}
