import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivitiesService} from "../../../core/services/activities.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TOTALPRICE } from '../../../utils/injection.token';
import { dataProducts } from 'src/app/core/entities/data';
import { ClientService } from 'src/app/core/services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  displayedColumns: string[] = ['id','idClient','nameClient','mailClient','accion'];
  dataSource:any;
  public idClient = "";
  data: IData[] = [];

  constructor(private clientService: ClientService,
    private http: HttpClient, private snackBar: MatSnackBar,
    @Inject(TOTALPRICE) public injectTotalprice: string)
  {}

  ngOnInit(): void {
    this.onGetSubmit();
  }

  onClickSubmit(search:any) {
    var countPrice: number;
    countPrice=0;
    this.clientService.getClient(search).subscribe(result => {
      this.data = (result);
      this.dataSource= this.data;
    });

  }
  onGetSubmit() {
    try {

      var countPrice: number;
      countPrice=0;

      this.clientService.getAllClients().subscribe(result => {
        this.data = (result);
        this.dataSource= this.data;
      });
    } catch (error) {
      console.error(error)
    }
  }

  private openSnackBar(mensaje: string, duracion: number, color: string): void {
    this.snackBar.open(mensaje, 'Ok', {
      duration: duracion,
      horizontalPosition: `center`,
      verticalPosition: `top`,
      panelClass: [color]
    });
  }

  deleteClient(row: any) {
    this.clientService.delClient(row.id).subscribe(response => {
      this.openSnackBar(response.message, 3000, 'success');
      this.ngOnInit();
    }, error => {
      this.openSnackBar(error.error.message, 3000, 'warning');
    });
  }

  editClient(row: any) {
  //   const data = {
  //     id: row
  // }
  //   this.clientService.putClient(data.id,data).subscribe(response => {
  //     this.openSnackBar(response.message, 3000, 'success');
  //     this.ngOnInit();
  //   }, error => {
  //     this.openSnackBar(error.error.message, 3000, 'warning');
  //   });
   }

   
}
