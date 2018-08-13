import { Injectable } from '@angular/core';
import { User } from "./user";
import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';


@Injectable()
export class UserServiceService {
  [x: string]: any;
  private usersUrl = 'http://localhost:8080/api';  // URL to web API
  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: Http, private router: Router) { }

  // login(post): Observable<any> {

  //   console.log(post);
  //   const getLoginUrl = this.usersUrl + '/user?email=' + post['email'];
  //   console.log("getloginURL value ", getLoginUrl)
  //   console.log(post['email']);
  //   return this.http.get(getLoginUrl, {}).map(
  //     res => {

  //       console.log("response",res.text());
  //       if (res.text() != null) {
  //         //console.log(res.json.toString());
  //         localStorage.setItem('currentUser', JSON.parse(res.text()));
  //         console.log("user local storafe", JSON.parse(res.text()))

  //         this.router.navigateByUrl('');
  //       }
  //       return res.json();
  //     },
  //     err => {
  //       return err;
  //     }
  //   )
  // }

  login(data): Observable<any> {
    console.log(data);
    const getLoginUrl = this.usersUrl + '/user?email=' + data['email'];
    console.log("getloginURL value ", getLoginUrl)
    console.log(data['email']);
    return this.http.get(getLoginUrl, {}).map(response => {
      if (response.text() != null) {
        //console.log(res.json.toString());
        localStorage.setItem('currentUser', JSON.parse(response.text()));
        localStorage.setItem(JSON.stringify(data['email']), JSON.stringify(data['password']));
        console.log("localstorage",localStorage)
        
        this.router.navigateByUrl('');
      }
      return response.json();
    },
      err => {
        return err;
      }

    )
  }


  logout() {
    localStorage.removeItem('currentUser');
  
  }

  getUsers(): Observable<any> {
    const getUserUrl = this.usersUrl + '/users';
    return this.http.get(getUserUrl, {}).map(
      res => {
        return res.json();
      },
      err => {
        return err;
      }
    )

  }

  delete(id: number): Observable<User> {
    return this.http.delete(this.usersUrl + '/user/' + id).map(
      () => null,
      err => {
        return err;
      }
    );

  }

  getUserById(id: number): Observable<any> {
    const getUserUrl = this.usersUrl + '/user/id';
    return this.http.get(getUserUrl, {}).map(
      res => {
        return res.json;
      },
      err => {
        return err;
      }
    )
  }

  getUserByEmail(email: any): Observable<any> {
    const getUserUrl = this.usersUrl + '/user?email=' + email;
    return this.http.get(getUserUrl, {}).map(
      res => {
        return res.json;
      },
      err => {
        return err;
      }
    )
  }
}
