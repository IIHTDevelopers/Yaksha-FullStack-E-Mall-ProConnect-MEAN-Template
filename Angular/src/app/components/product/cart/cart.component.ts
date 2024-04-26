import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

export interface CartItem {
  _id: string;
  userId: string;
  completed: boolean;
  createdAt: string;
  items: CartItemDetail[];
}

export interface CartItemDetail {
  product: Product;
  quantity: number;
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  ratings: number[];
  __v: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItem | null = null;
  showCheckoutForm: boolean = false;
  paymentBy: string = '';
  shippingAddress: string = '';
  trackingNumber: string = this.generateTrackingNumber();
  estimatedDeliveryDate: string = this.calculateEstimatedDeliveryDate();
  totalAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
    // write your logic here
  }

  loadCart(): void {
    // write your logic here
  }

  removeItem(itemId: string): void {
    // write your logic here
  }

  increaseQuantity(item: CartItemDetail): void {
    // write your logic here
  }

  decreaseQuantity(item: CartItemDetail): void {
    // write your logic here
  }

  submitCheckoutForm(): void {
    // write your logic here
  }

  checkoutCart(): void {
    // write your logic here
  }

  generateTrackingNumber(): any {
    // write your logic here
  }

  calculateEstimatedDeliveryDate(): any {
    // write your logic here
  }

  calculateTotalAmount(): void {
    // write your logic here
  }
}
