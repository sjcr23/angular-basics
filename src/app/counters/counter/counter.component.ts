import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10;


  increaseBy(value: number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
