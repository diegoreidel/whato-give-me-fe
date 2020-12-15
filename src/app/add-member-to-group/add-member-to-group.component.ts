import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Group } from '../interfaces/group';
import { AddMemberState } from '../state/add-member-state';
import { UserService } from '../user.service';
import { User } from '../interfaces/user'
import { GroupService } from '../group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member-to-group',
  templateUrl: './add-member-to-group.component.html',
  styleUrls: ['./add-member-to-group.component.scss']
})
export class AddMemberToGroupComponent implements OnInit {

  selectedGroup: Group;
  email: string;
  name: string;
  description: string;
  group: Group;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private router: Router,
    private store: Store< {group: AddMemberState} >
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.group).subscribe(group => this.email = group.email);
    this.store.select(state => state.group).subscribe(group => this.group = group.group);
  }

  submit(): void {
    const newUser: User = {
      email: this.email,
      name: this.name,
      description: this.description
    } as User;

    this.userService.createNewUser(newUser).subscribe(user => {
      this.groupService.addMember(this.group, user).subscribe(group => {
        this.group = group;
        this.router.navigate(['/groups']);
      })
    });
  }

}
