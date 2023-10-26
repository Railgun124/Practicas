import { Component } from '@angular/core';
import { CarritoService } from '../models/carrito.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public favoritosArray: Product[] = [];
  public carrito: { [productId: string]: { product: Product, quantity: number, subtotal: number  } } = {};
  public totalCompra: number = 0

  constructor(private carritoService: CarritoService) {  }

  public cambiarFavorito(ind: number): void {
    this.favoritosArray[ind].favorite = !this.favoritosArray[ind].favorite;
    this.carritoService.setFavorito(this.favoritosArray.filter((item) => item.favorite== true));
    this.favoritosArray = this.carritoService.getFavoritos(); 
  }

  public agregar(product: Product): void {
    

    // Verificar si el producto ya está en el carrito
    const productId = product.name; // Suponiendo que el nombre del producto es único
  
    if (this.carrito[productId]) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      this.carrito[productId].quantity += 1;
      this.carrito[productId].subtotal += this.carrito[productId].product.price;
    } else {
      // Si es la primera vez que se agrega, crea una entrada en el carrito
      this.carrito[productId] = { product, quantity: 1, subtotal: product.price};
    }
    this.carritoService.setCarrito(this.carrito);
    // Calcula el total de la compra
    this.calcularTotalCompra();
  }

  private calcularTotalCompra(): void {
    this.totalCompra = 0;
    for (const productId in this.carrito) {
      const item = this.carrito[productId];
      this.totalCompra += item.product.price * item.quantity;
    }
    this.carritoService.setTotalCarrito(this.totalCompra);
  }


  ionViewWillEnter() {
    this.favoritosArray = this.carritoService.getFavoritos(); 
    this.carrito = this.carritoService.getCar();
    this.totalCompra = this.carritoService.getTotalCarrito();
  }

}
