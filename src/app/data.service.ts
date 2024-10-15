import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BASE_URL = `https://urlhaus-api.abuse.ch/v1/urls/recent/`;

  constructor(private http: HttpClient) { }

  gettingAllData() {
    return this.http.get<Observable<any[]>>(this.BASE_URL)
  }
}
