import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../models/carrito.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public carritoArray: any;
  public totalCompra: any;

  constructor(private carritoService: CarritoService) {
  }

  ionViewWillEnter() {
    this.carritoArray = this.carritoService.getCarrito();
    this.totalCompra = this.carritoService.getTotalCarrito();
  }

  
  deleteItem(product: Product) {

    this.carritoService.deleteCarritoArray(product);
  
    this.carritoArray = this.carritoService.getCarrito();
  
    this.calcularTotalCompra();
  
  }


  private calcularTotalCompra(): void {
    this.totalCompra = 0;
    for (const item of this.carritoArray) {
      this.totalCompra += item.product.price * item.quantity;
    }
    this.carritoService.setTotalCarrito(this.totalCompra);
  }
  

}
