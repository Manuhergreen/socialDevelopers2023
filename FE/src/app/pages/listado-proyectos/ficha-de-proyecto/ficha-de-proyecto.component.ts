import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-ficha-de-proyecto',
  templateUrl: './ficha-de-proyecto.component.html',
  styleUrls: ['./ficha-de-proyecto.component.scss']
})
export class FichaDeProyectoComponent {
  id!: number;

  constructor (private proyecto:ProjectService, private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id= Number(params.get("id"))
    })
  }

}
