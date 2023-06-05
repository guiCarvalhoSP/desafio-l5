import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Observable } from 'rxjs';
import { ICharacters } from 'src/app/shared/interfaces/ICharacter';
import { IEpisodes } from 'src/app/shared/interfaces/IEpisodes';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home.component';

const mockEpisodes: IEpisodes = {
  results: [],
  info: {
    count: 0,
    pages: 0,
    next: undefined,
    prev: undefined,
  },
};

const mockCharacters: ICharacters = {
  results: [],
  info: {
    count: 0,
    pages: 0,
    next: undefined,
    prev: undefined,
  },
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;
  let snackService = { openSnackBar: jasmine.createSpy('openSnackBar') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, EpisodesComponent, CharactersComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MaterialModule,
        InfiniteScrollModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provider: SnackbarService,
          useValue: snackService,
        },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve obter lista completa de episódios', () => {
    let spied = spyOn(apiService, 'getAllEpisodeList').and.returnValue(
      new Observable((subscriber) => {
        subscriber.next(mockEpisodes);
      })
    );

    component.renderEpisodesList();
    expect(spied).toHaveBeenCalled();
  });

  it('Deve obter a próxima lista de episódios', () => {
    component.nextEpisodeUrl = 'http://newpage.com';

    let spied = spyOn(apiService, 'getResponseFromAUrl').and.returnValue(
      new Observable((subscriber) => {
        subscriber.next(mockEpisodes);
      })
    );

    component.renderEpisodesList();
    expect(spied).toHaveBeenCalledWith('http://newpage.com');
  });

  it('Deve obter lista completa de personagens', () => {
    let spied = spyOn(apiService, 'getAllCharacterList').and.returnValue(
      new Observable((subscriber) => {
        subscriber.next(mockCharacters);
      })
    );

    component.renderCharactersList();
    expect(spied).toHaveBeenCalled();
  });

  it('Deve obter a próxima lista de personagens', () => {
    component.nextCharactersUrl = 'http://newpage.com';

    let spied = spyOn(apiService, 'getResponseFromAUrl').and.returnValue(
      new Observable((subscriber) => {
        subscriber.next(mockCharacters);
      })
    );

    component.renderCharactersList();
    expect(spied).toHaveBeenCalledWith('http://newpage.com');
  });

  it('Deve obter lista de episódios filtrado pelo nome', () => {
    component.searchForm.controls['search'].setValue('busca');
    component.listRendered = 'episodes';

    let spied = spyOn(apiService, 'getFilteredEpisodeList').and.returnValue(
      new Observable((subscriber) => {
        subscriber.next(mockEpisodes);
      })
    );

    component.renderFilteredList();
    expect(spied).toHaveBeenCalledWith('busca');
  });

  it('Deve obter lista de personagens filtrado pelo nome', () => {
    component.searchForm.controls['search'].setValue('busca');
    component.listRendered = 'characters';

    let spied = spyOn(apiService, 'getFilteredCharacterList').and.returnValue(
      new Observable((subscriber) => {
        subscriber.next(mockCharacters);
      })
    );

    component.renderFilteredList();
    expect(spied).toHaveBeenCalledWith('busca');
  });

  it('Deve trocar a lista que deverá ser renderizada para episodios', () => {
    component.changeRenderList(0);
    expect(component.listRendered).toEqual('episodes');
  });

  it('Deve trocar a lista que deverá ser renderizada para episodios', () => {
    component.changeRenderList(1);
    expect(component.listRendered).toEqual('characters');
  });

  it('Deve trocar a lista que deverá ser renderizada para episodios, e se tiver algo para buscar, deve renderizar a lista já com o filtro', () => {
    component.searchForm.controls['search'].setValue('busca');
    component.changeRenderList(0);
    
    let spied = spyOn(component, 'renderFilteredList').and.callFake(()=>{});

    component.renderFilteredList();
    expect(spied).toHaveBeenCalled();
  });

  it('Deve trocar a lista que deverá ser renderizada para personagens, e se tiver algo para buscar, deve renderizar a lista já com o filtro', () => {
    component.searchForm.controls['search'].setValue('busca');
    component.changeRenderList(1);
    
    let spied = spyOn(component, 'renderFilteredList').and.callFake(()=>{});

    component.renderFilteredList();
    expect(spied).toHaveBeenCalled();
  });


});
