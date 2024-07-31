import { Component } from '@angular/core';

interface Hero {
  age:number;
  alterEgo:string;
  realName:string;
}

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroes:Hero[] = [
    {age:52, alterEgo:'Batman', realName:'Bruce Wayne'},
    {age:53, alterEgo:'Superman', realName:'Clark Kent'},
    {age:140, alterEgo:'Wonder Woman', realName:'Diana Prince'},
    {age:38, alterEgo:'The Flash', realName:'Barry Allen'},
    {age:35, alterEgo:'Green Lantern', realName:'Hall Jordan'},
  ];
  emptyList:boolean = false;
  deletedHero:string = "...";

  removeLastHero():void {
    var heroName = this.heroes.pop()?.alterEgo;
    this.emptyList = this.heroes.length === 0;
    this.deletedHero = heroName? heroName : '...';
  }
}



