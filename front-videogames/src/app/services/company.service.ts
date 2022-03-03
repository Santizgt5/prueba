import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from '../models/company';
import { API_URLS, BASE_URL } from './../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companies: Company[];
  public reloaded$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
    this.getAll();
      this.reloaded$.subscribe((value) => {
          if(value) {
              this.getAll();
              this.reloaded$.next(false);
          }
      });
   }

   get Companies() {
     return this.companies;
   }


  public getAll() {
    this.http.get( `${BASE_URL}${API_URLS.COMPANY}`).subscribe( (response: any) => {
        if(response.status === 'success') {
            this.companies = response.data;
        } else {
            console.log(response.data);
        }
    })
}
  public createCompany(data: Company) {
    return new Promise((resolve, reject) => {
      this.http.post(`${BASE_URL}${API_URLS.COMPANY}`, data).subscribe((response: any) => {
        if(response.status === 'success') {
            this.reloaded$.next(true);
            resolve(true);
        }else {
          reject(false);
        }
    })
    });
}

}
