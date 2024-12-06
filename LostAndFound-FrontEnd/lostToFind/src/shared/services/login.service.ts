import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {loginResponse} from '../types/login-response';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = "http://localhost:8000";

  constructor( private http: HttpClient ) {
  }


  login(email: string, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.apiURL + "/accounts/Account/login/", {email, password}).pipe(
      tap(( value) => {
        sessionStorage.setItem("acces_token", value.token)
        sessionStorage.setItem("email", value.email)
      })
    )
  }

  signup(username: string, email: string, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.apiURL + "/accounts/Account/signup/", {username, email, password}).pipe(
      tap(( value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("email", value.email)
      })
    )
  }
}
