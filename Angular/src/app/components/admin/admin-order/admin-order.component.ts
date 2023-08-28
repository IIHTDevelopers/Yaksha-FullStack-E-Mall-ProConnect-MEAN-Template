import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders(): void {
    // write your logic here
  }
}
