import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character, getBounty } from '../../interfaces/character.interface';

@Component({
  selector: 'op-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listName:string = "The Crew";

  @Input()
  nakamas:Character[] = [];

  @Output()
  onDeletedId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return console.log('Id no especified');
    this.onDeletedId.emit(id);
  }
}
