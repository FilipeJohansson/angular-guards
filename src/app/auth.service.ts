import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRole(): Observable<Role> {
    /**
    * fake an API call
    */
    return of(Role.USER).pipe(delay(1000));
  }
}
