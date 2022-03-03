import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Videogame } from '../models/videogame';
import { HttpClient } from '@angular/common/http'
import { API_URLS, BASE_URL } from './../app.constants';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

    private videogames: Videogame[];
    public reloaded$: Subject<boolean> = new Subject();
    public loaded$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
      this.getAll();
      this.reloaded$.subscribe((value) => {
          if(value) {
              this.getAll();
              this.reloaded$.next(false);
          }
      });
  }

  get Videogames() {
      return this.videogames;
  }

  public getAll() {
      return new Promise((resolve, reject) => {
        this.http.get( `${BASE_URL}${API_URLS.VIDEOGAME}`).subscribe( (response: any) => {
            if(response.status === 'success') {
                this.videogames = response.data;
                this.loaded$.next(true)
                resolve(true);
            } else {
                console.log(response.data);
                this.loaded$.next(false);
                reject(false);
            }
        });
      });
  }

  public createVideogame(data: Videogame) {
      return new Promise((resolve, reject) => {
        this.http.post(`${BASE_URL}${API_URLS.VIDEOGAME}`, data).subscribe((response: any) => {
            if(response.status === 'success') {
                this.reloaded$.next(true);
                resolve(true);
            } else {
                reject(false);
            }
        })
      })
  }
}
