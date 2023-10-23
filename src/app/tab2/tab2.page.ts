import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../models/carrito.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public carritoArray: any;
  public totalCompra: any;

  constructor(private carritoService: CarritoService) { }

  ionViewWillEnter() {
    this.carritoArray = this.carritoService.getCarrito();
    this.totalCompra = this.carritoService.getTotalCarrito();
  }

}
