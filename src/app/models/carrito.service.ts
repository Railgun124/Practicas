import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  purchases: {date: string, cart: {product: Product, quantity: number}[] }[] = [];
  public carritoArray: { product: Product, quantity: number, subtotal: number }[] = [];
  public favoritosArray: any;
  public totalCarrito: number = 0;
  public car:{ [productId: string]: { product: Product, quantity: number, subtotal: number  } } = {};

  constructor() { }

  setPurchasedCart(cart: any) {
    this.carritoArray = cart;
  }
  
  deleteCarritoArray(productToRemove: Product) {
    // Save cart before deleting
    
    this.carritoArray = this.carritoArray.filter(item => {
      return item.product.name !== productToRemove.name; 
    });
  
  }

  clearCart() {
    // Save cart 
    this.purchases.push({
      date: new Date().toISOString(), 
      cart: this.carritoArray
    });
  
    // Clear cart
    this.carritoArray = [];
    this.totalCarrito=0;
  
  }

  getPurchases() {
    return this.purchases; 
  }

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