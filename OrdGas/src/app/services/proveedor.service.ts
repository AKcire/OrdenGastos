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
export class ProveedorService {

  private baseUrl = 'http://localhost:8080/espe/api/proveedores';
  constructor(private http: HttpClient, ) { }

  getProveedor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProveedor(proveedor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, proveedor);
  }

  updateProveedor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProveedor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProveedoresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
