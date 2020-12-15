import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Group } from './interfaces/group';
import { User } from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupsUrl = 'http://localhost:3000/groups'

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl);
  }

  addMember(group: Group, user: User): Observable<Group> {
    const url = `${this.groupsUrl}/${group._id}/users`;
    return this.http.put<Group>(url, user);
  }

}
