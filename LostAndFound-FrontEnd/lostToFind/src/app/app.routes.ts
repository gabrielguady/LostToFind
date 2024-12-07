import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuardService} from '../shared/services/auth-guard.service'
import {RegistryFoundItemComponent} from './pages/registry-item/registry-found-item.component';

export const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path:  'item/:action', component: RegistryFoundItemComponent}
];
