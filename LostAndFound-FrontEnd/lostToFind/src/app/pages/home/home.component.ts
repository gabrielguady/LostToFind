import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BannerComponent} from './banner/banner.component';
import {CategoriesComponent} from './categories/categories.component';
import {RecentItemsComponent} from './recent-items/recent-items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    CategoriesComponent,
    RecentItemsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lostItems: string[] = [];
  foundItems: string[] = [];

  constructor() {

    this.lostItems = ['Chave', 'Celular', 'Carteira'];
    this.foundItems = ['Óculos', 'Relógio', 'Livro'];
  }

  addLostItem(item: string) {
    this.lostItems.push(item);
  }

  addFoundItem(item: string) {
    this.foundItems.push(item);
  }
}
