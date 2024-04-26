import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchName: string = '';

  constructor() { }

  ngOnInit(): void {
    // write your logic here
  }

  loadProducts(): void {
    // write your logic here
  }

  searchProduct(): void {
    // write your logic here
  }

  addToCart(product: Product): void {
    // write your logic here
  }

  viewDetails(product: Product): void {
    // write your logic here
  }

}
