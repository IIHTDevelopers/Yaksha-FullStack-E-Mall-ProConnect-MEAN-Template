import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://127.0.0.1:8081/api/users';

    private token: string | null = null;

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        // write your logic here
        return null;
    }

    getToken(): string | null {
        // write your logic here
        return null;
    }

    logout() {
        // write your logic here
        return null;
    }
}
