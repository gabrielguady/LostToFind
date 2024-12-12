import {Component, OnInit} from '@angular/core';
import {FoundItem} from '../../../../shared/models/found-item';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../../shared/urls';
import {NgForOf} from '@angular/common';
import {AppService} from '../../../../shared/services/app.service';


@Component({
  selector: 'app-recent-items-found',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './recent-items-found.component.html',
  styleUrl: './recent-items-found.component.css'
})
export class RecentItemsFoundComponent implements OnInit {
  public items: FoundItem[] = [];

  // private router: Router = new Router();
  private service: AppService<FoundItem>

  constructor(private http: HttpClient) {
    this.service =  new AppService<FoundItem>(http,URLS.FOUND_ITEM)
  }

  ngOnInit() {
    this.search()
  }

  public search(resetIndex: boolean = false): void {
    this.service.getAll().subscribe({
      next: (data: FoundItem[]) => {
        this.items = data;

      },
      error: (err) => {
        console.error('Error loading found items');
      }

    });
  }


}
