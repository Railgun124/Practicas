import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carritoArray: { product: Product, quantity: number, subtotal: number }[] = [];
  public favoritosArray: any;
  public totalCarrito: number = 0;
  public car:{ [productId: string]: { product: Product, quantity: number, subtotal: number  } } = {};

  constructor() { }

  setCarrito(carrito: { [productId: string]: { product: Product, quantity: number, subtotal: number  } }) {
    this.carritoArray = Object.values(carrito);
  }

  setCar(carrito: { [productId: string]: { product: Product, quantity: number, subtotal: number  } }){
    this.car = carrito;
  }

  setTotalCarrito(total: number) {
    this.totalCarrito = total;
  }

  setFavorito(favorito: Product []) {
    this.favoritosArray = favorito;
  }

  getCarrito() {
    return this.carritoArray;
  }

  getCar(){
    return this.car;
  }

  getTotalCarrito() {
    return this.totalCarrito;
  }

  getFavoritos(){
    return this.favoritosArray;
  }
}