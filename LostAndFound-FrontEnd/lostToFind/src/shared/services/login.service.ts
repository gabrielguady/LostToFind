import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {URLS} from '../urls';
import {loginResponse} from '../types/login-response';
import {jwtDecode} from 'jwt-decode';

export interface User {
  id: number;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserURL: string = `${URLS.BASE}/accounts/auth/current_user/`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>("http://localhost:8000/api/token/", { email, password })
      .pipe(
        tap(response => this.setSession(response)),
        catchError(this.handleError)
      );
  }
  signup(username: string, email: string, cellphone: number, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>("http://localhost:8000/accounts/auth/signup/", {username, email, cellphone, password}, { withCredentials: true }).pipe(
      tap(( value) => {
        sessionStorage.setItem("access-token", value.access)
        sessionStorage.setItem("refresh", value.refresh)
      })
    )
  }

  refreshToken(): Observable<loginResponse> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.http.post<loginResponse>("http://localhost:8000/api/token/refresh", { refresh: refreshToken })
      .pipe(
        tap(response => this.setSession(response)),
        catchError(this.handleError)
      );
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.currentUserURL)
      .pipe(catchError(this.handleError));
  }

  private setSession(authResult: loginResponse) {
    localStorage.setItem('access_token', authResult.access);
    localStorage.setItem('refresh_token', authResult.refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }
  isLoggedIn(): boolean {
    const token = this.getAccessToken();
    if (!token) {
      return false; // Sem token, o usuário não está logado.
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Tempo atual em segundos.
      return decodedToken.exp > currentTime; // Retorna true se o token ainda não expirou.
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return false;
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 401) {
        errorMessage = 'Unauthorized: Please check your credentials';
      } else if (error.status === 400) {
        errorMessage = 'Bad Request: Please check your input';
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

