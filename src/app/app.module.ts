import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { AddMemberToGroupComponent } from './add-member-to-group/add-member-to-group.component';
import * as fromGroup from './group.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    GroupsListComponent,
    AddMemberToGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    FontAwesomeModule,
    StoreModule.forRoot({group: fromGroup.reducer})
  ],
  providers: [],
  exports: [AddMemberToGroupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
