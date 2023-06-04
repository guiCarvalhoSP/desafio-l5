import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { IEpisodes } from '../interfaces/IEpisodes';
import { environment } from 'src/environments/environment.development';
import { ICharacters } from '../interfaces/ICharacter';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
  let url: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = environment.apiUrl;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada GET para obter lista completa de episodios', () => {
    const response: IEpisodes = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getAllEpisodeList().subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/episode`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/episode`);
  });

  it('Deve gerar erro ao obter lista completa de episodios', () => {
    service.getAllEpisodeList().subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(`${url}/episode`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/episode`);
  });

  it('Deve realizar chamada GET para lista completa de episodios, passando a página que deve ser renderizada', () => {
    const response: IEpisodes = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getAllEpisodeList('2').subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/episode?page=2`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/episode`);
    expect(request.request.params.get('page')).toBe('2');

  });

  it('Deve gerar erro ao obter lista completa de episodios, passando a página que deve ser renderizada', () => {
    service.getAllEpisodeList('2').subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(`${url}/episode?page=2`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/episode`);
    expect(request.request.params.get('page')).toBe('2');
  });

  it('Deve realizar chamada GET para lista de episodios com filtro de nome', () => {
    const response: IEpisodes = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getFilteredEpisodeList('episode').subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/episode?name=episode`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/episode`);
    expect(request.request.params.get('name')).toBe('episode');

  });

  it('Deve gerar erro ao obter lista de episodios com filtro de nome', () => {
    service.getFilteredEpisodeList('episode').subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(`${url}/episode?name=episode`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/episode`);
    expect(request.request.params.get('name')).toBe('episode');
  });

  it('Deve realizar chamada GET para lista de personagens com filtro de nome', () => {
    const response: ICharacters = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getFilteredCharacterList('character').subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/character?name=character`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/character`);
    expect(request.request.params.get('name')).toBe('character');

  });

  it('Deve gerar erro ao obter lista personagens com filtro de nome', () => {
    service.getFilteredCharacterList('character').subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(`${url}/character?name=character`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/character`);
    expect(request.request.params.get('name')).toBe('character');
  });

  it('Deve realizar chamada GET para obter lista completa de personagens', () => {
    const response: ICharacters = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getAllCharacterList().subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/character`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/character`);
  });

  it('Deve gerar erro ao obter lista completa de personagens', () => {
    service.getAllCharacterList().subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(`${url}/character`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/character`);
  });

  it('Deve realizar chamada GET para lista completa de personagens, passando a página que deve ser renderizada', () => {
    const response: ICharacters = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getAllCharacterList('2').subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/character?page=2`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/character`);
    expect(request.request.params.get('page')).toBe('2');

  });

  it('Deve realizar chamada GET para uma url passada', () => {
    const response: ICharacters = {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: undefined,
        prev: undefined
      }
    };

    service.getResponseFromAUrl(`${url}`).subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}`);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}`);
  });

  it('Deve gerar erro ao tentar obter uma resposta passando uma url da api', () => {
    service.getResponseFromAUrl(`${url}`).subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(`${url}`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}`);
  });
});
