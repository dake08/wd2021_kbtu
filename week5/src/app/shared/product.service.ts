import { Injectable } from '@angular/core';
import { products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  visibleProduct = [];
  getProducts(){
    return this.visibleProduct = Products.slice(0);
  }
  getProduct(id: number){
    return Products.slice(0).find(product => product.id === id)
  }
  constructor() { }
}

const Products = products

