import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home' },
    { title: 'Reservar', url: '/folder/Post', icon: 'attach-outline' },
    { title: 'Precios', url: '/folder/ventas', icon: 'cart' },
    { title: 'Empty', url: '/folder/proveedores', icon: 'people' },
  ];
  public labels = ['Tel: 7774 4927','Contigo a la cotran.'];
  constructor() {}
}
