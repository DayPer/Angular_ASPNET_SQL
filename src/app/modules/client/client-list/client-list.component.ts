import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientComponent } from '../client-add/client.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Clients } from 'src/app/core/entities/data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSourceData!: MatTableDataSource<Clients>;
  clientsData: Clients[]=[];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddClients(){
    const dialogRef = this.matDialog.open(ClientComponent  , {
      width: '31rem',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(clients => {
        if(clients){
          this.clientsData.push(clients);
          this.dataSourceData = new  MatTableDataSource<Clients>(this.clientsData)
          this.dataSourceData.paginator = this.paginator;
          this.ngOnInit();
        }
    });
  }
}
