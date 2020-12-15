import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'http://localhost:3000/users/'

  constructor(private http: HttpClient) { }

  findUser(email: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + email);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl, user);
  }

}
