import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'op-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  formName:string = "Add a Nakama";

  recordedCharacter:Character = {
    name: '',
    bounty: ''
  };

  @Output()
  emitedCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void {
    console.log(this.recordedCharacter);

    // debugger;

    // Invalid cases
    const emptyName: boolean = this.recordedCharacter.name.length === 0;
    const positiveBounty: boolean = Number(this.recordedCharacter.bounty) > 0;
    if (emptyName || !positiveBounty) return;

    this.emitedCharacter.emit(this.recordedCharacter);
    this.recordedCharacter = {name: '', bounty: ''};
  }
}
