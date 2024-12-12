import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ItemCategory} from "../../../../shared/models/item-category";
import {AppService} from "../../../../shared/services/app.service";
import {HttpClient} from "@angular/common/http";
import {URLS} from "../../../../shared/urls";


@Component({
  selector: 'app-category-sec',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './category-sec.component.html',
  styleUrl: './category-sec.component.css'
})
export class CategorySecComponent implements OnInit {
  categories: ItemCategory[] = [];
  // private router: Router = new Router();
  private service: AppService<ItemCategory>
  // private parameters: HttpParams = new HttpParams();


  constructor(private http: HttpClient) {
    this.service = new AppService<ItemCategory>(http, URLS.ITEM_CATEGORY)
  }

  ngOnInit() {
    this.search()
  }

  public search(resetIndex: boolean = false): void {
    this.service.getAll().subscribe({
      next: (data: ItemCategory[]) => {
        this.categories = data;

      },
      error: (err) => {
        console.error('Error loading categories');
      }
    });
  }


}
