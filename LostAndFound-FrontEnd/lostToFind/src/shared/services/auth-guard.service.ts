import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Verifica se o usuário está autenticado com token
    if (this.loginService.getAccessToken()) {
      return true;  // Permite o acesso à rota
    } else {
      this.router.navigate(['/login']);  // Redireciona para o login
      return false;
    }
  }
}
