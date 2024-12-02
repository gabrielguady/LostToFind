import {Component, OnInit} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputPrimaryComponent} from '../../components/input-primary/input-primary.component';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {Router} from '@angular/router';

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

  constructor(private router : Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
  }
  navigate(){
    this.router.navigate(['signup']);
  }

}
