import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserServiceService]
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  id : number;
  constructor(private userService: UserServiceService, private router : Router) { }

  ngOnInit() {
  }
  goBack(): any {
    window.location.replace('/user-list');
  }
  delete() {
    this.userService.delete(this.user.id).subscribe(() => this.goBack())
  }

  update(user : User){
    this.id = user.id;
    this.router.navigateByUrl('/create-user/id')
  }
 

}
