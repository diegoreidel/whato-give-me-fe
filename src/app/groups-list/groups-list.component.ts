import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store} from '@ngrx/store';

import { GroupService } from '../group.service';
import { Group } from '../interfaces/group'; 
import { User } from '../interfaces/user';
import { addMember } from '../group.actions';

import * as fromGroup from '../group.reducer';
import { AddMemberState } from '../state/add-member-state';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserState } from '../state/user-state';
import { seeMember } from '../user.actions';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  groups: Group[] = [];
  selectedGroup: Group;
  newUserEmail: string = "";
  showingAddMember: boolean = false;
  faSearch = faSearch;

  constructor(
    private groupService: GroupService, 
    private userService: UserService,
    private store: Store<AddMemberState>, 
    private userStore: Store<UserState>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.groups = groups);
  }

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }

  toogleAddMember(): void {
    this.showingAddMember = !this.showingAddMember;
  }

  submitEmail(): void {
    this.userService.findUser(this.newUserEmail).subscribe(user => {
      this.groupService.addMember(this.selectedGroup, user).subscribe(group => {
        this.selectedGroup = group
      });
    }, err => {
      if(err.status === 404) {
        this.store.dispatch(addMember({request: ({group: this.selectedGroup, email: this.newUserEmail})}));
        this.router.navigate(['users/add'], { relativeTo: this.route });
      }
    });
  }

  seeUser(selected: User) {
    this.userStore.dispatch(seeMember({member: ({user: selected})}));
    this.router.navigate(['/users']);
  }

}
