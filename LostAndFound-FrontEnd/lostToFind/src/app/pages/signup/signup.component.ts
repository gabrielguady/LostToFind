import {Component, OnInit} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputPrimaryComponent} from '../../components/input-primary/input-primary.component';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {Router} from '@angular/router';

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
export class SignupComponent implements OnInit {

  public signupForm! : FormGroup;
  constructor(private router : Router) {

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
    console.log(this.signupForm.value)
  }
  navigate(){
    this.router.navigate(['login']);
  }

}
