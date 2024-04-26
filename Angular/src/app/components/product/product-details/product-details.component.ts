import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Blog } from '../../../models/blog.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  product: Product | null = null;
  blog: Blog | null = null;

  constructor() { }

  ngOnInit(): void {
    // write your logic here
  }

  loadProductDetails(): void {
    // write your logic here
  }

  loadBlogDetails(productId: string): void {
    // write your logic here
  }

  addToCart(product: Product): void {
    // write your logic here
  }
}
