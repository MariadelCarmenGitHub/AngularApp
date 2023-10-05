import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent{

  //Para bindear los datos del personaje
  @Input() character!: Character;// | undefined;

  constructor(){}

}
