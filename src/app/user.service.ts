import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Desire } from './interfaces/desire';
import { User } from './interfaces/user';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = `${environment.backend_url}/users/`

  constructor(private http: HttpClient) { }

  findUser(email: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + email);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl, user);
  }

  createDesise(user: User, desire: Desire): Observable<User> {
    const url = `${this.usersUrl}/${user.email}/desires`;
    return this.http.put<User>(url, desire);
  }

}
