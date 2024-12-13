import {Component, input, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FoundItem} from '../../../../shared/models/found-item';
import {HttpClient, HttpParams} from '@angular/common/http';
import {URLS} from '../../../../shared/urls';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {AppService} from '../../../../shared/services/app.service';


@Component({
  selector: 'app-recent-items-found',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './recent-items-found.component.html',
  styleUrl: './recent-items-found.component.css'
})
export class RecentItemsFoundComponent implements OnInit, OnChanges {
  public items: FoundItem[] = [];
  @Input() searchQuery: string = ''
  @Input() dateString: string = ''

  // private router: Router = new Router();
  private service: AppService<FoundItem>
  private parameters: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
    this.service =  new AppService<FoundItem>(http,URLS.FOUND_ITEM)
  }

  ngOnInit() {
    this.search()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery'] && changes['searchQuery'].currentValue !== changes['searchQuery'].previousValue) {
      this.search();
    }
  }

  public search(resetIndex: boolean = false): void {
    this.service.clearParameter();
    this.service.addParameter('search_all', this.searchQuery);

    this.service.getAll().subscribe({
      next: (data: FoundItem[]) => {
        this.items = data;
      },
      error: (err) => {
        console.error('Error loading found items', err);
      }
    });
  }



}
