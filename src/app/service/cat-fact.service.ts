import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  constructor(private http: HttpClient) {}

  getCatFact() {
    return this.http.get<any>('https://catfact.ninja/fact');
  }
}
