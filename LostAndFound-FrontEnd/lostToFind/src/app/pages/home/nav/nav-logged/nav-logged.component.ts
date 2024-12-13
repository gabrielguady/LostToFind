import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {LoginService} from "../../../../../shared/services/login.service";
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-nav-logged',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NavLoggedComponent),
    multi: true
  }],
  templateUrl: './nav-logged.component.html',
  styleUrl: './nav-logged.component.css'
})
export class NavLoggedComponent implements OnInit {

  username: string | null = null;
  searchValue: string = '';

  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.loadUserDetails();
    }
  }

  loadUserDetails(): void {
    this.loginService.getCurrentUser().subscribe(
      (data) => {
        this.username = data.username;
      },
      (error) => {
        console.error('Erro ao carregar os detalhes do usuário', error);
      }
    );
  }


  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchValue = input.value;
    this.searchChanged.emit(this.searchValue);
  }

  search(value: string): void {
    this.searchChanged.emit(value);
  }


  logout(): void {
    this.loginService.logout();
    this.username = null;
    this.reloadPage()
  }

  reloadPage() {
    window.location.reload()
  }
}
