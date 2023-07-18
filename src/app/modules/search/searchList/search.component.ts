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

  displayedColumns: string[] = ['codProduct','product','amount','price'];
  dataSource:any;
  public idClient = "";
  data: IData[] = [];

  constructor(private activitiesService: ActivitiesService,
    private http: HttpClient,
    @Inject(TOTALPRICE) public injectTotalprice: string)
  {}

  ngOnInit(): void {
  }

  onClickSubmit(search:any) {
    var countPrice: number;
    countPrice=0;
    this.activitiesService.getProducts(search).subscribe(result => {
      this.data = (result);
      this.data.forEach(result =>{
        countPrice = (countPrice+(Number(result.price)))
      })
      this.injectTotalprice=  String(countPrice)
      this.dataSource= this.data;
    });

  }

}
