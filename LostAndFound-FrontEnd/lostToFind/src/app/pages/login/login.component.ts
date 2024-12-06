import {Component, OnInit} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputPrimaryComponent} from '../../components/input-primary/input-primary.component';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {NavigationExtras, Router} from '@angular/router';
import {LoginService} from '../../../shared/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    InputPrimaryComponent,
    AutofocusDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup;

  constructor(private loginService: LoginService, private router : Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      {
        next: () => this.goToPage('home'),
        error: () => console.log("error"),
      }
    )

  }

  public goToPage(route: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([route], extras).then();
  }
}
