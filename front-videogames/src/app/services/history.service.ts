import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { API_URLS, BASE_URL } from '../app.constants';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private histories: History[];
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

   get Histories() {
    return this.histories;
  }


   public getAll() {
    return new Promise((resolve, reject) => {
      this.http.get( `${BASE_URL}${API_URLS.HISTORY}`).subscribe( (response: any) => {
          if(response.status === 'success') {
              this.histories = response.data;
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

  public createHistory(data: History) {
    return new Promise((resolve, reject) => {
      this.http.post(`${BASE_URL}${API_URLS.HISTORY}`, data).subscribe((response: any) => {
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
