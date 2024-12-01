import { Component } from '@angular/core';
import {NavigationExtras, Router, RouterOutlet} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lostToFind';
  private router: Router = new Router();



  public goToPage(route: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([route], extras).then();
  }

}


