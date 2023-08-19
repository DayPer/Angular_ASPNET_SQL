import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivitiesService} from "../../../core/services/activities.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TOTALPRICE } from '../../../utils/injection.token';
import { dataProducts } from 'src/app/core/entities/data';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface ICurrency {
  currency: string;
}

export interface IDataOrders {
  idOrder: Number;
  codProduct: string;
  codOrder: string;
  idClient: string;
  nameClient: string;
  telClient: string;
  amountProduct: number;
  amountOrder: number;

}

export interface IDataProduct {
  codProduct: string;
  product: string;
  price: number;
}


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['idOrder','codOrder','idClient',
           'nameClient','telClient','amountProduct','amountOrder'];
  dataSource:any;
  formFields: FormGroup;

  @ViewChild(MatSort) sort!: MatSort;
  public codProduct = "";
  public codOrder = "";
  public idClient = "";
  public nameClient = "";
  public telClient = "";
  public amountProduct = 0;
  public amountOrder = 0;
  public price = 0;
  public search = "";


  currency: ICurrency[] = [
    {currency:"COP"}
  ];

  dataOrders: IDataOrders[] = [];
  dataProducts: IDataProduct[] = [];

  constructor(private activitiesService: ActivitiesService,
    private http: HttpClient,private formBuilder: FormBuilder,
    @Inject(TOTALPRICE) public injectTotalprice: string)
  {
    this.formFields= this.formBuilder.group({
      idClient:['',[Validators.required]],
      nameClient:['',[Validators.required]],
      telClient:['',[Validators.required]],
      amountProduct:[0,[Validators.required]],
    })
  }

  resertField(){
    this.formFields =new FormGroup({
      idClient:new FormControl(''),
      nameClient:new FormControl(''),
      telClient:new FormControl(''),
      amountProduct:new FormControl(0),
      })
  }
  onGetSubmit() {
    try {

      var countPrice: number;
      countPrice=0;

      this.activitiesService.getAllOrders().subscribe(result => {
        this.dataOrders = (result);
        this.dataOrders.forEach(result =>{
          countPrice = (countPrice+(Number(result.amountOrder)))
        })
        this.injectTotalprice=  String(countPrice)
        this.dataSource= this.dataOrders;
      });
    } catch (error) {
      console.error(error)
    }
  }
  ngOnInit(): void {
    this.onGetSubmit();
    this.onGetAllProducts();
  }

  onClickSubmit(search:any) {
    var countPrice: number;
    countPrice=0;
    this.activitiesService.getOrders(search).subscribe(result => {
      this.dataOrders = (result);
      this.dataOrders.forEach(result =>{
        countPrice = (countPrice+(Number(result.amountOrder)))
      })
      this.injectTotalprice=  String(countPrice)
      this.dataSource= this.dataOrders;
    });

  }

  onClickDelete(search:any) {
    var codOrder: string;
    this.dataOrders.forEach(count=>{
      codOrder=count.codOrder
    })
    this.activitiesService.deleteOrders(search).subscribe(result => {
      this.dataOrders = [];
      this.injectTotalprice=  String('00')
      this.dataSource= this.dataOrders;
    });
    this.onGetSubmit();
  }

   onClickPost(codProduct:any) {
      var fprice: number;
      var fcount: number;
      fprice=0;
      fcount=0;
      this.dataProducts.forEach(product=>{
        if (product.codProduct==codProduct){
          fprice=product.price;
          return;
        }
      })

      this.dataOrders.forEach(count=>{
        fcount= (fcount+1)
      })
      const data = {
      codProduct: this.codProduct.trim(),
      codOrder: (this.codProduct.trim()+-+this.idClient.trim()+-+String(fcount)),
      idClient: this.idClient.trim(),
      nameClient: this.nameClient.trim(),
      telClient: this.telClient.trim(),
      amountProduct: Number(this.amountProduct),
      amountOrder: (this.amountProduct*fprice)
      }
      this.activitiesService.postOrders(data).subscribe(result => {
        this.onGetSubmit();
        this.resertField();
    });

  }

  onGetAllProducts() {
    try {

      this.activitiesService.getAllProducts().subscribe(result => {
        this.dataProducts = (result);
      });
    } catch (error) {
      console.error(error)
    }
  }
}



