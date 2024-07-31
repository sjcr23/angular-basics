import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  age:number = 23;
  alterEgo:string = 'Batman';
  realName:string = 'Bruce Wayne';

  get capitalizeName():string {
    return this.alterEgo.toUpperCase();
  }

  heroDescription():string {
    return `${this.alterEgo} - ${this.age}`;
  }

  setAgeTo(value:number):void {
    this.age = value;
    this.realName = 'Barry Allen';

  }

  setNameTo(value:string):void {
    this.alterEgo = value;
  }

  resetToDefault() {
    this.age = 23;
    this.alterEgo = 'Batman';
    this.realName = 'Bruce Wayne';
  }
}
