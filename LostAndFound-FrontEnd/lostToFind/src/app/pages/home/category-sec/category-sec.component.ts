import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';

class Category {
  name: string;
  icon: string;
  altText: string;

}

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
  categories: Category[] = [
    {
      name: "Phone",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6098fd97dcd4615e370e4f71e5ef3b07f2c59695c7f0f6bc9bc01887ae6e0ea2?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      altText: "Phone category icon"
    },
    {
      name: "Clothes",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25e1ef1484c21ba3e3ccd543016fa4a40bd56956d50b129dead4b5ef3af3d85c?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      altText: "Clothes category icon"
    },
    {
      name: "Documents",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/702bb45e639b7d4853ee2ffae13eaf6381bb0d663cdf7843f6b3027d6a732d39?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      altText: "Documents category icon"
    },
    {
      name: "Automobile",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a45b6193e8ced84a475b4a1a36a6ae6fdca389caadab9e81ea26ef497dc201cb?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      altText: "Automobile category icon"
    },
  ]
}
