import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
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

  constructor(public dialog: MatDialog) {}

  onScroll() {
    this.scrollEmmiter.emit();
  }

  openDetailModal(character: ICharacter) {
    this.dialog.open(ModalComponent, {
      data: character,
    });
  }
}
