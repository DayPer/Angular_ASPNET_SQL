import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import { TOTALPRICE } from 'src/app/utils/injection.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public opcionesMenu = [
    {name: 'HOME', url: '/home', icon: 'home'},
    // {name: 'ACTIVIDADES', url: '/activities', icon: 'restore'},
    {name: 'PRODUCTS', url: '/products', icon: 'check'},
    {name: 'ORDERS', url: '/orders', icon: 'list'},
    {name: 'CLIENTS', url: '/search', icon: 'search'},

  ];

  constructor(private router: Router,
              @Inject(TOTALPRICE) public injecttotalprice: string )
  {
  }

  openMenu(url: string): void {
    this.router.navigate([url]);
  }
}
