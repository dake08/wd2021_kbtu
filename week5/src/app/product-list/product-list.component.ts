import { Component, Input, OnChanges } from '@angular/core';
import {ProductService} from "../shared/product.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnChanges {
  title = 'Category-Wise';
  @Input() filterBy?: string ='all';
  visibleProducts: any[] = [];

  constructor(private productService: ProductService) {
    this.visibleProducts = this.productService.getProducts();
  }

  ngOnChanges(){
    this.visibleProducts = this.productService.getProducts();
  }
  removeFromList(addedItem) {

    this.visibleProducts = _.without(this.visibleProducts, addedItem);
    // let index = this.visibleProducts.indexOf(addedItem);
    //
    // this.visibleProducts.splice(index, 1); // Removes one element, starting from index
  }

  onClick(product) {
    product.likesCount += 1;
  }

}
