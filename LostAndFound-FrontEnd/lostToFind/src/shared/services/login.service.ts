import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {loginResponse} from '../types/login-response';
import {Observable, tap} from 'rxjs';

export interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = "http://localhost:8000/api/token/";

  constructor( private http: HttpClient ) {
  }


  login(email: string, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.apiURL, {email, password}).pipe(
      tap(( value) => {
        sessionStorage.setItem("access_token", value.access_token)
        sessionStorage.setItem("refresh", value.refresh)
      })
    )
  }

  signup(username: string, email: string, cellphone: number, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>("http://localhost:8000/accounts/auth/signup/", {username, email, cellphone, password}).pipe(
      tap(( value) => {
        sessionStorage.setItem("access-token", value.access_token)
        sessionStorage.setItem("refresh", value.refresh)
      })
    )
  }
}
