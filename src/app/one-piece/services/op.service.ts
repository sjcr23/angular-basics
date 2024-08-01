import { Injectable } from '@angular/core';
import { Character, getBounty } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class OpService {
  title:string = "Angular Demo: One Piece Characters Example 🏴‍☠️";
  characters:Character[] = [
    {id:uuid(), name:"Luffy", bounty:getBounty(3000)},
    {id:uuid(), name:"Zoro", bounty:getBounty(320)},
  ];

  addCharacter(character: Character): void {
    character.bounty = getBounty(Number(character.bounty));
    const newCharacter: Character = {id:uuid(), ...character};
    this.characters.push(newCharacter);
  }

  onDeleteCharacterByIndex(index: number){
    this.characters.splice(index, 1);
  }

  onDeleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id != id);
  }
}
