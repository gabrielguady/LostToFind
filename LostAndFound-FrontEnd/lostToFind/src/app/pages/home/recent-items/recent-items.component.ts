import {Component, OnInit} from '@angular/core';
import {LostItem} from '../../../../shared/models/lost-item';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../../shared/urls';
import {NgForOf} from '@angular/common';
import {AppService} from '../../../../shared/services/app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recent-items',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './recent-items.component.html',
  styleUrl: './recent-items.component.css'
})
export class RecentItemsComponent implements OnInit {
  public recentItems: LostItem[]=[];

  private router: Router = new Router();
  private service: AppService<LostItem>

  constructor(private http: HttpClient) {
  this.service =  new AppService<LostItem>(http,URLS.LOST_ITEM)
  }

  ngOnInit() {
    this.search()
  }

  public search(resetIndex: boolean = false): void {
    this.service.getAll().subscribe({
      next: (data: LostItem[]) => {
        this.recentItems = data;

      },
      error: (err) => {
        console.error('Error loading lost items');
      }

    });
  }


}
