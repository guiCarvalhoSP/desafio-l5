import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesComponent } from './episodes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodesComponent],
      imports: [InfiniteScrollModule]
    });
    fixture = TestBed.createComponent(EpisodesComponent);
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
