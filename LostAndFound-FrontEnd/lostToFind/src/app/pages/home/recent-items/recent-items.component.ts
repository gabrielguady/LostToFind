import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Item {
  image: string;
  title: string;
  category: string;
  date: string;
  status: "Lost" | "Found";
  alt: string;
}

@Component({
  selector: "app-recent-items",
  templateUrl: "./recent-items.component.html",
  styleUrl: "./recent-items.component.css",
  standalone: true,
  imports: [CommonModule],
})
export class RecentItemsComponent {
  items: Item[] = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6961fc5a92d928a56061352f7e7de942cf40c6a6f5a62c51f17658d2bb08de27?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      title: "Camera SONY-S10",
      category: "Electronics",
      date: "16/10/1999",
      status: "Lost",
      alt: "Lost SONY-S10 camera",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2aec511da92f11fbb68d69e304a7d75f1845289c12d8a7db5d6905df87d94f3b?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      title: "Livro El Capital",
      category: "Books",
      date: "16/10/1999",
      status: "Lost",
      alt: "Lost El Capital book",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b8b05e88712f1c2dd7e65f053491e2cd4e5ad3e733be311a267a48277cbce5c?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      title: "Celular Motorola FlipFlop",
      category: "Phone",
      date: "16/10/1999",
      status: "Lost",
      alt: "Lost Motorola FlipFlop phone",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e6f5e0dda8c849787c30a718132521707c2d00dd79baae026c158bf73867564?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      title: "Generic",
      category: "Categorie name",
      date: "16/10/1999",
      status: "Found",
      alt: "Found generic item",
    },
  ];
}
