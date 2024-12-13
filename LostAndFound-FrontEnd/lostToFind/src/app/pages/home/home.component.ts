import {Component, OnInit} from '@angular/core';
import {RecentItemsLostComponent} from './recent-items-lost/recent-items-lost.component';
import {PostItemComponent} from './post-item/post-item.component';
import {CategorySecComponent} from './category-sec/category-sec.component';
import {NavComponent} from './nav/nav.component';
import {RecentItemsFoundComponent} from './recente-items-found/recent-items-found.component';
import {NavLoggedComponent} from './nav/nav-logged/nav-logged.component';
import {LoginService} from '../../../shared/services/login.service';
import {NgIf} from '@angular/common';
import {NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecentItemsLostComponent,
    PostItemComponent,
    CategorySecComponent,
    NavComponent,
    RecentItemsFoundComponent,
    NavLoggedComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = false;
  searchQuery: string = '';

  private router: Router = new Router();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
  }
  onSearchValueChanged(value: string): void {
    this.searchQuery = value;
  }


}

