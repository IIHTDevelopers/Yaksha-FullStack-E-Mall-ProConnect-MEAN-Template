import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://127.0.0.1:8081/api/users';

    constructor(private http: HttpClient) { }

    createUser(user: User): any {
        // write your logic here
        return null;
    }

    getUserProfile(id: string): any {
        // write your logic here
        return null;
    }

    updateUserProfile(id: string, user: User): any {
        // write your logic here
        return null;
    }

    deleteUser(id: string): any {
        // write your logic here
        return null;
    }

    getUserByEmail(email: string): any {
        // write your logic here
        return null;
    }

    getUserActivity(id: string): any {
        // write your logic here
        return null;
    }

    getUserFavorites(id: string): any {
        // write your logic here
        return null;
    }

    changeUserPassword(id: string, newPassword: string): any {
        // write your logic here
        return null;
    }
}
