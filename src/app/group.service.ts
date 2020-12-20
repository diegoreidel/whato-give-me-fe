import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Group } from './interfaces/group';
import { User } from './interfaces/user';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupsUrl = `${environment.backend_url}/groups`

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl);
  }

  addMember(group: Group, user: User): Observable<Group> {
    const url = `${this.groupsUrl}/${group._id}/users`;
    return this.http.put<Group>(url, user);
  }

}
