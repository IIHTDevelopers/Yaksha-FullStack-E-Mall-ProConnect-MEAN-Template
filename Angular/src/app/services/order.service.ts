import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private baseUrl = 'http://127.0.0.1:8081/api/orders';

    constructor(private http: HttpClient) { }

    getAllOrders(): any {
        // write your logic here
        return null;
    }

    createOrder(order: Order): any {
        // write your logic here
        return null;
    }

    getOrder(id: string): any {
        // write your logic here
        return null;
    }

    updateOrder(id: string, order: Order): any {
        // write your logic here
        return null;
    }

    getUserOrders(userId: string): any {
        // write your logic here
        return null;
    }

    cancelOrder(id: string): any {
        // write your logic here
        return null;
    }

    getPaymentDetails(id: string): any {
        // write your logic here
        return null;
    }

    processPayment(id: string): any {
        // write your logic here
        return null;
    }

    getOrderAnalytics(): any {
        // write your logic here
        return null;
    }

    generateInvoice(id: string): any {
        // write your logic here
        return null;
    }

    trackShipment(id: string): any {
        // write your logic here
        return null;
    }

    getRevenueAnalytics(): any {
        // write your logic here
        return null;
    }

    getIsOrdered(userId: string, productId: string): any {
        // write your logic here
        return null;
    }
}
