import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { IEpisodes } from '../shared/interfaces/IEpisodes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getResponseFromAUrl(url: string) {
    return this.http.get<any>(url);
  }

  getAllEpisodeList(page?: string | number) {
    if(page) {
      return this.http.get<IEpisodes>(`${this.url}/episode`, {params: {page: page}});
    }
    return this.http.get<IEpisodes>(`${this.url}/episode`);
  }
}
