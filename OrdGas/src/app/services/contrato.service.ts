import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const httpconf = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };
@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private baseUrl = 'http://localhost:8080/espe/api/contratos';
  private baseUrl2 = 'http://localhost:8080/espe/api/contratosLi';
  constructor(private http: HttpClient, ) { }

  getContrato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createContrato(contrato: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, contrato);
  }

  updateContrato(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteContrato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContratosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getContratosL(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`);
  }
}
