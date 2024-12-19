import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = 'http://127.0.0.1:8081/api/products';

    constructor(private http: HttpClient) { }

    createProduct(product: Product): any {
        // write your logic here
        return null;
    }

    getProduct(id: string): any {
        // write your logic here
        return null;
    }

    updateProduct(id: string, product: Product): any {
        // write your logic here
        return null;
    }

    deleteProduct(id: string): any {
        // write your logic here
        return null;
    }

    getAllProducts(): any {
        // write your logic here
        return null;
    }

    getTopRatedProducts(limit: number): any {
        // write your logic here
        return null;
    }

    searchProduct(name: string, description: string): any {
        // write your logic here
        return null;
    }

    applyDiscount(userId: string, discountPercentage: number): any {
        // write your logic here
        return null;
    }

    checkoutCart(userId: string, paymentMethod: string, address: string): any {
        // write your logic here
        return null;
    }

    addToCart(userId: string, productId: string, quantity: number, price: number): any {
        // write your logic here
        return null;
    }

    viewCart(userId: string): any {
        // write your logic here
        return null;
    }

    updateCartItem(userId: string, itemId: string, quantity: number): any {
        // write your logic here
        return null;
    }

    removeCartItem(userId: string, itemId: string): any {
        // write your logic here
        return null;
    }
}
