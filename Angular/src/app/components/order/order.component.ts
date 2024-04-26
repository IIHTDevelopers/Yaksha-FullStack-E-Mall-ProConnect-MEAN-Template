import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
    // write your logic here
  }

  loadUserOrders(): void {
    // write your logic here
  }

  cancelOrder(order: Order): void {
    // write your logic here
  }
}
