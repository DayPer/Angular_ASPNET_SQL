import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export const ipServer = 'https://localhost:7254';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {
  }
  public getFlights(origin:any, destination:any): Observable<any> {
    return this.http.get<any>(`${ipServer}/flightAvailability/GetFlightsForJourney?Origin=`+ origin + '&Destination=' + destination);
  }
}
