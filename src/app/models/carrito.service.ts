import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carritoArray: any;
  public totalCarrito: number = 0;

  constructor() { }

  setCarrito(carrito: { [productId: string]: { product: Product, quantity: number, subtotal: number  } }) {
    this.carritoArray = Object.values(carrito);
  }

  setTotalCarrito(total: number) {
    this.totalCarrito = total;
  }

  getCarrito() {
    return this.carritoArray;
  }

  getTotalCarrito() {
    return this.totalCarrito;
  }
}