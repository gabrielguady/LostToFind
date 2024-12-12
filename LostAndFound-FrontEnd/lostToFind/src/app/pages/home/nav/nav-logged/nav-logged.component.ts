import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {LoginService} from "../../../../../shared/services/login.service";

@Component({
  selector: 'app-nav-logged',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './nav-logged.component.html',
  styleUrl: './nav-logged.component.css'
})
export class NavLoggedComponent implements OnInit {
  username: string | null = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.loadUserDetails();
    }
  }

  loadUserDetails(): void {
    this.loginService.getCurrentUser().subscribe(
      (data) => {
        // Supondo que o nome do usuário esteja disponível na resposta
        this.username = data.username;
      },
      (error) => {
        console.error('Erro ao carregar os detalhes do usuário', error);
      }
    );
  }



  logout(): void {
    this.loginService.logout();
    this.username = null;
    this.reloadPage()
  }
  reloadPage(){
    window.location.reload()
  }
}
