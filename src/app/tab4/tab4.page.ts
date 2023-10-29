import { Component } from '@angular/core';
import { CarritoService } from '../models/carrito.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public carritoArray: any;
  public totalCompra: any;
  constructor(private carritoService: CarritoService) {  }
  // In tab4.page.ts

ionViewWillEnter() {
  
  this.carritoArray = this.carritoService.getPurchases();
  for (let purchase of this.carritoArray){
    for(let product of purchase.cart){
      console.log(product.product.name); 
      console.log(product.product.price);
    }
    for (const item of purchase.cart) {
      this.totalCompra += item.product.price * item.quantity;
    }
  }
}

addToCart(cart: any) {
  this.carritoService.setPurchasedCart(cart);
}



comprar(){
  for (let purchase of this.carritoArray){
    for(let product of purchase.cart){
      this.carritoService.setCarrito(product.product);
      this.carritoService.setCar(product.product);
    }
  }
}

// Loop through purchases to display
}
