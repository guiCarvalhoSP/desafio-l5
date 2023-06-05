import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/shared/material/material.module';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      imports: [InfiniteScrollModule, MaterialModule]
    });
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve emitir um valor ao chamar o método onScroll', () => {
    let spied = spyOn(component.scrollEmmiter, 'emit');
    component.onScroll();
    expect(spied).toHaveBeenCalled();
  });
});
