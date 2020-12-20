import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GroupService } from '../group.service';
import { Desire } from '../interfaces/desire';
import { User } from '../interfaces/user';
import { UserState } from '../state/user-state';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  showingAddDesire: boolean = false;
  summary: string;
  description: string;

  constructor(
    private userService: UserService,
    private store: Store< {user: UserState} >
  ) { }

  ngOnInit(): void {
    this.store.select(member => member.user).subscribe(user => {
      this.userService.findUser(user.user.email).subscribe(updatedUser => this.user = updatedUser);
    });
  }

  toogleAddDesire(): void {
    this.showingAddDesire = !this.showingAddDesire;
  }

  saveDesire(): void {
    const newDesire = {summary: this.summary, description: this.description} as Desire;
    this.userService.createDesise(this.user, newDesire).subscribe(user => {
      this.user = user;
      this.showingAddDesire = false;
      this.summary = "";
      this.description = "";
    });
  }

}
