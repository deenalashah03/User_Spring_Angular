import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserServiceService]



})
export class CreateUserComponent implements OnInit {


  registerForm: FormGroup;
  validator: ValidatorFn;
  succesAlert: any;
  registerAlert: any;
  resisterError: boolean = false;
  email: any
  user = new User
  constructor(private authenticationservice: UserServiceService,
    public router: Router, private location: Location) {

  
  }

  private newMethod() {
    
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirm_password: new FormControl('', Validators.compose([Validators.required, this
        .checkIfMatchingPasswords]))
    });
  }
  checkIfMatchingPasswords(group: FormGroup, ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let passwordInput = group.controls.password.value,
        passwordConfirmationInput = group.controls.confirm_password.value;
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }

  }



  onSubmit(user: User) {
    this.email = user.email;
    this.authenticationservice.getUserByEmail(this.email).subscribe(
      res => {
        if (res.status == true) {
          this.resisterError = true
          this.registerAlert = "User already present, please login to continue";
          this.router.navigateByUrl('/');
        } else {
          this.succesAlert = "Registered Succesfully, login to continue";
          this.router.navigateByUrl('/login');

        }
      },
      err => {
        return err;

      }
    );


  }
  saveUser() {

  }
  goBack(): void {
    this.location.back();
  }
}
