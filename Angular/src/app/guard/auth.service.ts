import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor() { }

  canActivate(): boolean {
    // write your logic here
    return false;
  }
}
