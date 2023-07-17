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
    this.poster='https://www.newshore.es/media/1310/header-plane-3jpg.jpg'

  }

}
