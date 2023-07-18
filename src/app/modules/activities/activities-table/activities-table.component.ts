import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivitiesService} from "../../../core/services/activities.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TOTALPRICE } from '../../../utils/injection.token';

export interface Currency {
  trm: number;
  currency: string;
}

export interface IJourneyAvailability {
  journey: IJourney
}

export interface IJourney {
  origin: string;
  destination: string;
  price: string;
  flights: Array<IFlight>;
}

export interface IFlight {
  origin: string;
  destination: string;
  price: string;
  transport: ITransport;
}

export interface ITransport {
  flightCarrier: string;
  flightNumber: string;
}


@Component({
  selector: 'app-activities-table',
  templateUrl: './activities-table.component.html',
  styleUrls: ['./activities-table.component.css']
})
export class ActivitiesTableComponent implements OnInit {

  displayedColumnsFlights: string[] = ['origin','destination','price','flightNumber','flightCarrier'];
  dataSource:any;

  @ViewChild(MatSort) sort!: MatSort;



  public origin = "";
  public destination = "";
  public currency = "";
  public flights = [{ "price": "", "origin": "", destination: "", transport: {flightNumber:""} }];
  public journey = { flights: this.flights }
  public journeyOptions = {journey: this.journey}

  currencyTrm: Currency[] = [
    {trm: (1),currency:"USD"},
    {trm: (4172.17),currency:"COP"},
    {trm: (17.11),currency:"MXN"},
    {trm: (0.92),currency:"EUR"},
  ];


  constructor(private activitiesService: ActivitiesService,
              private http: HttpClient,
              @Inject(TOTALPRICE) public injectTotalprice: string) {
  }

  onClickSubmit(origin:any, destination:any, currency:any) {
    try {
      var countPrice: number;
      var currentTrm: number;
      countPrice=0;

      this.activitiesService.getFlights(origin,destination).subscribe(result => {
        this.journeyOptions = (result as IJourneyAvailability);
          this.currencyTrm.forEach(trm =>{
            if (trm.currency==currency){
              currentTrm = trm.trm
              return;
            }
          })

        this.journeyOptions.journey.flights.forEach(result =>{
          countPrice = (countPrice+(Number(result.price)*currentTrm))
          result.price = currency +-+ String(Number(result.price)*currentTrm);
        })
        this.injectTotalprice=  String(countPrice)
        this.dataSource= this.journeyOptions.journey.flights;
      });
    } catch (error) {
      console.error(error)
    }
  }
  ngOnInit() {}


}

