import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private baseUrl = 'http://127.0.0.1:8081/api/admin';

    constructor(private http: HttpClient) { }

    viewAllUsers(): any {
        // write your logic here
        return null;
    }

    viewAllProducts(): any {
        // write your logic here
        return null;
    }

    viewAllOrders(): any {
        // write your logic here
        return null;
    }

    viewAllBlogPosts(): any {
        // write your logic here
        return null;
    }

    viewDashboard(): any {
        // write your logic here
        return null;
    }

    viewReports(): any {
        // write your logic here
        return null;
    }

    viewUserAnalytics(): any {
        // write your logic here
        return null;
    }

    viewProductInventory(): any {
        // write your logic here
        return null;
    }

    viewSalesReports(): any {
        // write your logic here
        return null;
    }
}
