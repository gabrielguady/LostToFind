import {Component, OnInit} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputPrimaryComponent} from '../../components/input-primary/input-primary.component';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {Account} from '../../../shared/models/accounts';
import {HttpClient} from '@angular/common/http';
import { URLS } from '../../../shared/urls';
import {ServiceComponent} from '../service.component';

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
export class SignupComponent extends  ServiceComponent<Account> implements OnInit {
  public object: Account = new Account();

  public signupForm! : FormGroup;
  constructor(private http: HttpClient) {
    super (http, URLS.ACCOUNT)

  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  public save(): void {
    if (this.signupForm.valid) {
      Object.keys(this.signupForm.controls).forEach(key => {
        const value = this.signupForm.getRawValue()[key];
        if (value !== null && value !== undefined) {
          this.object[key] = value;
        }
      });
      this.service.save(this.object).subscribe((response: Account ) => {
        this.goToPage('login')
      })
    }

  }

}
