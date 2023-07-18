import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivitiesService} from "../../../core/services/activities.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TOTALPRICE } from '../../../utils/injection.token';
import { dataProducts } from 'src/app/core/entities/data';

export interface ICurrency {
  currency: string;
}

export interface IData {
  codProduct: string;
  product: string;
  price: number;
  amount: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['codProduct','product','amount','price'];
  dataSource:any;

  @ViewChild(MatSort) sort!: MatSort;
  public codProduct = "";
  public product = "";
  public price = 0;
  public amount = 0;
  public search = "";

  currency: ICurrency[] = [
    {currency:"COP"}
  ];

  data: IData[] = [];

  constructor(private activitiesService: ActivitiesService,
    private http: HttpClient,
    @Inject(TOTALPRICE) public injectTotalprice: string)
  {}

  onGetSubmit() {
    try {

      var countPrice: number;
      countPrice=0;

      this.activitiesService.getAllProducts().subscribe(result => {
        this.data = (result);
        var fcurrency:any
        this.currency.forEach(trm =>{
            fcurrency = trm.currency
            return;
        })

        this.data.forEach(result =>{
          countPrice = (countPrice+(Number(result.price)))
          result.price = fcurrency +-+ String(Number(result.price));
        })
        this.injectTotalprice=  String(countPrice)
        this.dataSource= this.data;
      });
    } catch (error) {
      console.error(error)
    }
  }
  ngOnInit(): void {
    this.onGetSubmit();
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

  onClickDelete(search:any) {
    var countPrice: number;
    countPrice=0;
    this.activitiesService.deleteProducts(search).subscribe(result => {
      this.data = [];
      this.injectTotalprice=  String('00')
      this.dataSource= this.data;
    });
    this.onGetSubmit();
  }

  onClickPut() {
    const data = {
      price: this.price,
      product:this.product,
      codProduct:this.codProduct
  }
    var countPrice: number;
    countPrice=0;
    this.activitiesService.putProducts(data.codProduct,data).subscribe(result => {
      this.onGetSubmit();
    });

  }

  onClickPost() {
    const data = {
      price: this.price,
      product:this.product,
      codProduct:this.codProduct,
      amount:this.amount
  }
      var countPrice: number;
      countPrice=0;
      this.activitiesService.postProducts(data).subscribe(result => {
        this.onGetSubmit();
    });
  }
}

