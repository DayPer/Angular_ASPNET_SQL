import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title:any;
  public poster:any;
  constructor() { }

  ngOnInit(): void {

    this.title= 'Welcome',
    this.poster='https://algartech.com/wp-content/uploads/2019/04/algartech-grupo.jpg'

  }

}
