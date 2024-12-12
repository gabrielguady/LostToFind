import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuardService} from '../shared/services/auth-guard.service'
import {RegistryFoundItemComponent} from './pages/registry-found-item/registry-found-item.component';
import {RegisterLostItemComponent} from './pages/register-lost-item/register-lost-item.component';

export const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  {path:  'itemFound/:action', component: RegistryFoundItemComponent, canActivate:[AuthGuardService]},
  {path:  'itemLost/:action', component: RegisterLostItemComponent, canActivate:[AuthGuardService]},
];
