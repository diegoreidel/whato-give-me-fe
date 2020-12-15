import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberToGroupComponent } from './add-member-to-group/add-member-to-group.component';
import { GroupsListComponent } from './groups-list/groups-list.component';


const routes: Routes = [
  {path: 'groups', component: GroupsListComponent},
  {path: 'groups/users/add', component: AddMemberToGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
