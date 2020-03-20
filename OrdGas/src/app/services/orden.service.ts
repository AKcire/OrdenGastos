import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

const httpconf = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private baseUrl = 'http://localhost:8080/espe/api/ordenGastos';
  private baseUrl2 = 'http://localhost:8080/espe/api/ordenesLi';
  constructor(private http: HttpClient, ) { }

  getOrdenGasto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrdenGasto(ordenGasto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ordenGasto);
  }

  updateOrdenGasto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrdenGasto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getOrdenGastosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getOrdenL(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`);
  }

  getOrdenF(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }
  
  // findDataUser(user: String){
  //   return this.http.get("https://servicios.espe.edu.ec:8443/adm_user-0.0.1-SNAPSHOT/adm/id/" + user + "/13",httpconf).pipe(
  //     map(
  //       (res: any) => {
  //           return res;
  //       },
  //       error => {
  //         console.log("Error: ", error);
  //       }
  //     )
  //   );
  // }

}
