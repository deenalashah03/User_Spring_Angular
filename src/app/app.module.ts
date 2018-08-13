import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import {RoutingModuleModule} from './routing-module/routing-module.module';
import {UserListComponent} from './user-list/user-list.component';
import { AppComponent } from './app.component';
import {UserServiceService} from './user-service.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthgardService } from './authgard.service';
import { AutofocusDirective } from './autofocus.directive';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    AutofocusDirective,
    UserDetailComponent,
    CreateUserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModuleModule,
    NgbModule.forRoot()
  ],
  providers: [UserServiceService, AuthgardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
