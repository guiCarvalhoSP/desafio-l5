import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from 'src/app/shared/interfaces/ICharacter';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  @Input()
  characters!: ICharacter[];

  @Output()
  scrollEmmiter = new EventEmitter();

  onScroll() {
    this.scrollEmmiter.emit();
  }
  
}
