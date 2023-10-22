import { Component, ChangeDetectorRef } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public products: Product[]=[];
  public productsFounds: Product[]=[];
  public filter = [
    "Abarrotes",
    "Frutas y Verduras",
    "Limpieza",
    "Farmacia"
  ];
  public carrito: { [productId: string]: { product: Product, quantity: number } } = {};
  public totalCompra: number = 0
  public carritoArray: { product: Product, quantity: number }[] = [];



  constructor()  {
    this.products.push({
      name: "Coca Cola",
      price: 25,
      description: "lorem ipsum dolor sit amet.",
      photo: "https://picsum.photos/500/300?random=1",
      type: "Abarrotes"
    });
    this.products.push({
      name: "Aguacate",
      price: 30,
      description: "lorem ipsum dolor sit amet.",
      photo: "https://picsum.photos/500/300?random=1",
      type: "Frutas y Verduras"
    });
    this.products.push({
      name: "Jabón Zote",
      price: 19,
      description: "lorem ipsum dolor sit amet.",
      photo: "https://picsum.photos/500/300?random=1",
      type: "Limpieza"
    });
    this.products.push({
      name: "Aspirina",
      price: 100,
      description: "lorem ipsum dolor sit amet.",
      photo: "https://picsum.photos/500/300?random=1",
      type: "Farmacia"
    });

    this.productsFounds = this.products;
    this.productsFounds = this.products;
  }

  public filterProducts ():void{
    console.log(this.filter);//va a guardar las var en el item con el filter => funcion arrow | el include guarda el tipo del item si coincide sino lo ignora
    this.productsFounds=this.products.filter(
      (item)=>{
        return this.filter.includes(item.type);
      }
    );
  }

  public agregar(product: Product): void {
    // Verificar si el producto ya está en el carrito
    const productId = product.name; // Suponiendo que el nombre del producto es único
  
    if (this.carrito[productId]) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      this.carrito[productId].quantity += 1;
    } else {
      // Si es la primera vez que se agrega, crea una entrada en el carrito
      this.carrito[productId] = { product, quantity: 1 };
    }
  
    // Calcula el total de la compra
    this.calcularTotalCompra();
    this.actualizarCarritoArray();
  }

  private calcularTotalCompra(): void {
    this.totalCompra = 0;
    for (const productId in this.carrito) {
      const item = this.carrito[productId];
      this.totalCompra += item.product.price * item.quantity;
    }
  }
  
  private actualizarCarritoArray() {
    this.carritoArray = Object.values(this.carrito);
  }
  
}
