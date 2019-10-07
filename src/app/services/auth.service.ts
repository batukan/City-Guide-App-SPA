import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
  ) { }

  path = "http://localhost:5000/api/Auth/";
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY = "token";

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "login", loginUser, { headers: headers, responseType: 'text' })
      .subscribe(data => {
        this.saveToken(data)
        this.decodedToken = this.jwtHelper.decodeToken(data)
        this.alertifyService.success("Welcome")
        this.router.navigateByUrl('/city')
      }, error => {
        this.alertifyService.error("Failed to log in")
      });
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data => {

      })
  }

  saveToken(token) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    sessionStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error("Logged out");
  }
  loggedIn() {
    return this.token && !this.jwtHelper.isTokenExpired(this.token);
  }
  get token() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.token).nameid;
  }
}
