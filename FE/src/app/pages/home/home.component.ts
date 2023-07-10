import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  listNoticias: any []= [];

  constructor(private _noticiaService:NoticiaService){

  }
  ngOnInit():void {

  
    this._noticiaService.getNoticias().subscribe(data=>{console.log(data);
     this.listNoticias= data.articles;
   }, error => {
     console.log(error);
     
   })
 }

}
