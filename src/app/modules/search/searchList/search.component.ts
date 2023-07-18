import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivitiesService} from "../../../core/services/activities.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TOTALPRICE } from '../../../utils/injection.token';
import { dataProducts } from 'src/app/core/entities/data';

export interface IData {
  codProduct: string;
  product: string;
  price: number;
  amount: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  displayedColumns: string[] = ['id','idClient','nameClient'];
  dataSource:any;
  public idClient = "";
  data: IData[] = [];

  constructor(private activitiesService: ActivitiesService,
    private http: HttpClient,
    @Inject(TOTALPRICE) public injectTotalprice: string)
  {}

  ngOnInit(): void {
    this.onGetSubmit();
  }

  onClickSubmit(search:any) {
    var countPrice: number;
    countPrice=0;
    this.activitiesService.getClient(search).subscribe(result => {
      this.data = (result);
      this.dataSource= this.data;
    });

  }
  onGetSubmit() {
    try {

      var countPrice: number;
      countPrice=0;

      this.activitiesService.getAllClients().subscribe(result => {
        this.data = (result);
        this.dataSource= this.data;
      });
    } catch (error) {
      console.error(error)
    }
  }

}
