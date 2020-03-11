import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SongService {

  apiUrl = '';

  constructor(private httpClient: HttpClient) {
  }
  public getList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
  public createSong(song: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, song);
  }
  getById(id): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/' + id);
  }
  editSong(name: string, description: string, url: string, image: string, id: number): Observable<any> {
    const product = {
      name,
      url,
      image,
      description,
      id,
    };
    return this.httpClient.put<any>(this.apiUrl + '/' + product.id, product);
  }
  public deleteSong(id: number): Observable<any> {
    return  this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
