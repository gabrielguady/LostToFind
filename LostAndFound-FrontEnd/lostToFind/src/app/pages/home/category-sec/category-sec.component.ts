import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ItemCategory} from "../../../../shared/models/item-category";



@Component({
  selector: 'app-category-sec',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './category-sec.component.html',
  styleUrl: './category-sec.component.css'
})
export class CategorySecComponent {
  categories: ItemCategory[] = [
  ]
}
