import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService : UserServiceService, private router: Router) { }
  users : User[]
  selectedUser:User
  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
   this.userService.getUsers().subscribe(users => this.users = users);
  }
  onSelect(user:User){
    this.selectedUser=user;
  }
  createUser(){
    this.router.navigateByUrl('/create-user')
  }
}
