import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import { AuthgardService } from '../authgard.service';
import { CreateUserComponent } from '../create-user/create-user.component';

const routes: Routes =[
  { path: '', component: HomeComponent, canActivate: [AuthgardService] },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent,canActivate: [AuthgardService] },
  { path: 'create-user/id', component: CreateUserComponent,canActivate: [AuthgardService] },
  { path: 'create-user', component: CreateUserComponent },
  { path: '**', redirectTo: 'home' }
    // otherwise redirect to home
  
] 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModuleModule { }
