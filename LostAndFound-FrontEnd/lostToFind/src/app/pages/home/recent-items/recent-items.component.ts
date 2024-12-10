import {Component} from '@angular/core';
import {PageComponent} from '../../page.component';
import {LostItem} from '../../../../shared/models/lost-item';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../../shared/urls';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-recent-items',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './recent-items.component.html',
  styleUrl: './recent-items.component.css'
})
export class RecentItemsComponent extends PageComponent<LostItem> {

  // title: "Camera SONY-S10",
  // last_seen_details: "Electronics",
  // reward: '10',
  // date_lost: 1999/10/22,
  // category:

  public recentItems: LostItem[]=[];
  constructor(private http: HttpClient) {
    super(http, URLS.LOST_ITEM);
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
