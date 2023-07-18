import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { dataProducts } from '../entities/data';
import { BehaviorSubject } from 'rxjs';



export const ipServer1 = 'https://localhost:7254';
export const ipServer2 = 'http://localhost:58683';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {
  }
  public getFlights(origin:any, destination:any): Observable<any> {
    return this.http.get<any>(`${ipServer1}/flightAvailability/GetFlightsForJourney?Origin=`+ origin + '&Destination=' + destination);
  }
  public getAllProducts(): Observable<any> {
    return this.http.get<any>(`${ipServer2}/api/Products`);
  }

  public getProducts(search:any): Observable<any> {
    return this.http.get<any>(`${ipServer2}/api/Products/`+search);
  }

  public deleteProducts(search:any): Observable<any> {
    return this.http.delete<any>(`${ipServer2}/api/Products/`+search);
  }

  public putProducts(codProduct: string, data:dataProducts): Observable<any> {
    return this.http.put<any>(`${ipServer2}/api/Products/`+ codProduct,data);
  }

  public postProducts(data:dataProducts): Observable<any> {
    return this.http.post<any>(`${ipServer2}/api/Products/`,data);
  }
}
