import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServiceService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  post: any;
  rememberPassword : boolean;
  emailAlert: string = "Please fill username";
  passwordAlert: string = "Please fill password";
  loginAlert: string;
  loginError: boolean = false;
  returnUrl: string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private authenticationservice: UserServiceService,
    public router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      remember : new FormControl("")    
    });
  }

  ngOnInit() {
    this.authenticationservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  verifyUser(post) {
    this.rememberPassword = this.loginForm.get('remember').value;
    console.log(this.rememberPassword)
    this.authenticationservice.login(post).subscribe(
      res => {
        if (res.status == true) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.loginError = true
          this.loginAlert = res.message;
        }
      },
      err => {
        return err;

      }
    );

  }
  
}
