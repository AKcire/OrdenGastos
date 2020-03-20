import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpconf = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private baseUrl = 'http://localhost:8080/espe/api/typeorders';
  constructor(private http: HttpClient, ) { }

  getTiposList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}