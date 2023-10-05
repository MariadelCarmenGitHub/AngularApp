import { Component } from '@angular/core';
//import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Character } from '../interfaces/Character'; 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] | undefined;
  characterCopy: Character[] | undefined;

  constructor(public http: HttpClient){
    this.getData();

  }

  filter(e: any){
    const {target} = e;
    const search: string = target.value;
    console.log({search});
    //TODO filter
    this.characters = this.characterCopy?.filter(({name}:Character)=>{
      return name.toLowerCase().includes(search.toLowerCase());
    })
  }

  async getData(){
    /* Comentado porque el servicio ya no está disponible, pero lo dejo de ejemplo de llamada a la api y mapeo de los datos recibidos al modelo de nuestra aplicación.

    this.http.get<any>(environment.apiUrl + "/characters")
    .subscribe((res) => {
      //IMPORTANTE: this.characters = res.map(r => {return {char_id: r.char_id, name: r.name, ....}}... o this.characters = res.map((r: any) => { return { char_id: r.char_id, name: r.name }})....
      //            También se puede poner con las formulas de arriba, pero es más ineficiente ya que cargamos toda la información devuelta por la API, cuando quizá solo necesitamos 5 items, en este caso.
      this.characters = res.map(({ char_id, name, nickname, img, status, occupation }: Character) => {
        return {
          char_id: char_id,
          name: name,
          nickname: nickname,
          img: img,
          status: status,
          occupation: occupation
        };
      });
      //console.table(res);
      this.characterCopy = this.characters;
    });*/

    this.characters = [
      {char_id: 1, name:"Walter White", nickname: "Heisenberg", img: "/assets/images/BB_T5A-Walter_White.webp", status: "Presumed dead", occupation: [{name:"High School Chemistry Teacher"},{name: "Meth King Pin"}]},
      {char_id: 2, name:"Jesse Pinkman", nickname: "Cap n'Cook", img: "/assets/images/BB_S5A_Jesse_Pinkman.webp", status: "Alive", occupation: [{name:"Meth Dealer"}]},
      {char_id: 3, name:"Skyler White", nickname: "Sky", img: "/assets/images/T5_-_Skyler.webp", status: "Alive", occupation: [{name:"House wife"},{name: "Book keeper"},{name:"Car wash manager"},{name: "Taxi dispatcher"}]},
      {char_id: 4, name:"Walter White Jr.", nickname: "Flynn", img: "/assets/images/BB_Walter_White Jr..webp", status: "Alive", occupation: [{name:"Teenager"}]},
      {char_id: 5, name:"Gretchen Schawartz", nickname: "Gretchen", img: "/assets/images/gretchen-schwartz.webp", status: "Alive", occupation: [{name:"Co-owner Gray Matter"}]},
    ];
    this.characterCopy = this.characters;
  }

}
