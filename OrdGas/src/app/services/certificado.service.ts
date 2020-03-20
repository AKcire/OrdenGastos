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
export class CertificadoService {

  private baseUrl = 'http://localhost:8080/espe/api/certificados';
  private baseUrl2 = 'http://localhost:8080/espe/api/certificadosLi';
  constructor(private http: HttpClient, ) { }

  getCertificado(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCertificado(certificado: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, certificado);
  }

  updateCertificado(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCertificado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCertificadosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCertificadosL(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`);
  }

  getCertificadoF(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }
}
