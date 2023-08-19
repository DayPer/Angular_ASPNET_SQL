import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivitiesService} from "../../../core/services/activities.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TOTALPRICE } from '../../../utils/injection.token';
import { dataProducts } from 'src/app/core/entities/data';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toBase64 } from '../helper';

export interface ICurrency {
  currency: string;
}

export interface IData {
  codProduct: string;
  product: string;
  price: number;
  amount: number;
  photo: any;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['codProduct','product','amount','price'];
  dataSource:any;
  formFields: FormGroup;
  imageBase64: any;
  urlcurrentImage!: any;
  photo: any;

  @ViewChild(MatSort) sort!: MatSort;
  @Output()
  //FileSeleted: EventEmitter<File> = new EventEmitter<File>();

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
    private http: HttpClient,private formBuilder: FormBuilder,
    @Inject(TOTALPRICE) public injectTotalprice: string)
    { this.formFields= this.formBuilder.group({
      codProduct:['',[Validators.required]],
      product:['',[Validators.required]],
      amount:[0,[Validators.required]],
      price:[0,[Validators.required]],
    })}

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

  resertField(){
    this.formFields =new FormGroup({
      codProduct:new FormControl(""),
      product:new FormControl(""),
      amount:new FormControl(0),
      price:new FormControl(0),
      })
  }
  onSearch(search:any) {
    var countPrice: number;
    countPrice=0;
    this.activitiesService.getProducts(search).subscribe(result => {
      this.data = (result);

      var fcurrency:any
        this.currency.forEach(trm =>{
            fcurrency = trm.currency
            return;
        })
        this.data.forEach(result =>{
          countPrice = (countPrice+(Number(result.price)))
          this.product=result.product.trim()
          this.amount=result.amount
          this.price=result.price
          result.price = fcurrency +-+ String(Number(result.price));

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
    this.resertField()

  }

  onClickPut() {
    const data = {
      price: this.price,
      product:this.product,
      codProduct:this.codProduct,
      amount: this.amount,
      photo: ''
  }
    var countPrice: number;
    countPrice=0;
    this.activitiesService.putProducts(data.codProduct,data).subscribe(result => {
      this.onGetSubmit();
      this.resertField()
    });

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
  onClickPost() {
    const data = {
      product:this.product,
      codProduct:this.codProduct,
      price: this.price,
      amount:this.amount,
      photo: this.photo
    }
      //const formData = this.objformData(data)
      var countPrice: number;
      countPrice=0;
      this.activitiesService.postProducts(data).subscribe(result => {
        this.onGetSubmit();
        this.resertField()
      });
  }
  SaveChanges(event: any) {
    //if (event.target.file.length > 0) {

      const file: File = event.target.files[0];
      toBase64(file).then((value: any) => this.imageBase64 = value)
      .catch(error => console.log(error));
      //this.FileSeleted.emit(file);
      const fphoto= {
          name:file.name,
          size:file.size,
          type:file.type
      }
      this.photo=file;
      console.log(this.photo);
    //}
  }
}

