import {Component, OnInit} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputPrimaryComponent} from '../../components/input-primary/input-primary.component';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {HttpClient} from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';
import {LoginService} from '../../../shared/services/login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    InputPrimaryComponent,
    AutofocusDirective,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {

  public signupForm! : FormGroup;
  constructor(private signupService: LoginService, private http: HttpClient, private router:Router) {

  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.signupService.signup(this.signupForm.value.username,this.signupForm.value.email, this.signupForm.value.password).subscribe(
      {
        next: () => console.log('login success'),
        error: () => console.log("error"),
      }
    )

  }

  public goToPage(route: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([route], extras).then();
  }




}
