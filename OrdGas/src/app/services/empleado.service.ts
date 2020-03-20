import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class EmpleadoService {
  private baseUrl = 'http://localhost:8080/espe/api/empleados';
  constructor(private http: HttpClient, ) { }

  getEmpleado(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmpleado(empleado: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, empleado);
  }

  updateEmpleado(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmpleadosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
