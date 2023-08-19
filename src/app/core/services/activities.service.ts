import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { dataOrders, dataProducts } from '../entities/data';
import { BehaviorSubject } from 'rxjs';

export const ipServer2 = 'http://localhost:58683';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {
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

  private objformData(data:dataProducts): FormData{
    const formData = new FormData();
    formData.append('codProduct',data.codProduct)
    formData.append('product',data.product)
    formData.append('price',data.price.toString())
    formData.append('amount',data.amount.toString())
    formData.append('photo',data.photo)

    return formData;
  }

  public postProducts(data:any): Observable<any> {
    return this.http.post(`${ipServer2}/api/Products/`,(data));
  }

  public getAllOrders(): Observable<any> {
    return this.http.get<any>(`${ipServer2}/api/Orders`);
  }

  public getOrders(search:any): Observable<any> {
    return this.http.get<any>(`${ipServer2}/api/Orders/`+search);
  }

  public postOrders(data:dataOrders): Observable<any> {
    return this.http.post<any>(`${ipServer2}/api/Orders/`,data);
  }

  public deleteOrders(search:any): Observable<any> {
    return this.http.delete<any>(`${ipServer2}/api/Orders/`+search);
  }

  public putOrders(codOrder: string, data:dataOrders): Observable<any> {
    return this.http.put<any>(`${ipServer2}/api/Orders/`+ codOrder,data);
  }

}
