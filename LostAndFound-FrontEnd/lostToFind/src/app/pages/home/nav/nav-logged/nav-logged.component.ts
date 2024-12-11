import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../../shared/models/accounts';
import {Router} from '@angular/router';
import {AppService} from '../../../../../shared/services/app.service';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../../../shared/urls';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-logged',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './nav-logged.component.html',
  styleUrl: './nav-logged.component.css'
})
export class NavLoggedComponent implements OnInit {
  public users: Account[]=[];

  private router: Router = new Router();
  private service: AppService<Account>

  constructor(private http: HttpClient) {
    this.service =  new AppService<Account>(http,URLS.ACCOUNT)
  }

  ngOnInit() {
    this.search()
  }

  public search(resetIndex: boolean = false): void {
    this.service.getAll().subscribe({
      next: (data: Account[]) => {
        this.users = data;

      },
      error: (err) => {
        console.error('Error loading user');
      }

    });
  }
}
