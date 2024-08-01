import { Component } from '@angular/core';
import { Character, getBounty } from '../interfaces/character.interface';
import { OpService } from '../services/op.service';

@Component({
  selector: 'app-op-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor (private opService: OpService) {};

  get title(): string{
    return this.opService.title;
  }

  get characters():Character[] {
    return [...this.opService.characters];
  }

  onDeteledCharacter(id: string): void {
    this.opService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.opService.addCharacter(character);
  }
}
