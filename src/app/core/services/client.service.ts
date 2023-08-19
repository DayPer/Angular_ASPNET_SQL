import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Clients, dataOrders, dataProducts } from '../entities/data';
import { BehaviorSubject } from 'rxjs';

export const ipServer = 'http://localhost:58683';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getAllClients(): Observable<any> {
    return this.http.get<any>(`${ipServer}/api/Clients`);
  }

  public getClient(search:any): Observable<any> {
    return this.http.get<any>(`${ipServer}/api/Clients/`+search);
  }

  public postClient(data:Clients): Observable<any> {
    return this.http.post<any>(`${ipServer}/api/Clients/`,data);
  }

  public putClient(id:string, data:any): Observable<any> {
    return this.http.put<any>(`${ipServer}/api/Clients/`+ id,data);
  }

  public delClient(id:string): Observable<any> {
    return this.http.delete<any>(`${ipServer}/api/Clients/`+ id);
  }
}
