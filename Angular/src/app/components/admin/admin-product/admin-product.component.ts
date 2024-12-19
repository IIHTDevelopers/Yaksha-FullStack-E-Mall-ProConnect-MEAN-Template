import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    name: '',
    description: '',
    price: 0,
    ratings: [],
    category: '',
    image: ''
  };
  searchName: string = '';
  selectedProduct: Product | null = null;
  isEditing: boolean = false;
  newProductForm!: FormGroup;
  topRatedProducts: Product[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  initForm(): void {
    // write your logic here
  }

  loadTopRatedProducts(): void {
    // write your logic here
  }

  loadProducts(): void {
    // write your logic here
  }

  onSubmit(): void {
    // write your logic here
  }

  createProduct(): void {
    // write your logic here
  }

  updateProduct(): void {
    // write your logic here
  }

  editProduct(product: Product): void {
    // write your logic here
  }

  deleteProduct(product: Product): void {
    // write your logic here
  }

  searchProduct(): void {
    // write your logic here
  }

  clearForm(): void {
    // write your logic here
  }
}
