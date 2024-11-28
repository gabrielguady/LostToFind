import {Component, OnInit} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

}
