import { Component } from '@angular/core';

class RecentItem {
  name: string;
  category: string
  date: string;
  status: string;
  image: string;
  statusClass: string;

}

@Component({
  selector: 'app-recent-items',
  standalone: true,
  imports: [],
  templateUrl: './recent-items.component.html',
  styleUrl: './recent-items.component.css'
})
export class RecentItemsComponent {
  recentItems: RecentItem[] = [
    {
      name: "Camera SONY-S10",
      category: "Electronics",
      date: "16/10/1999",
      status: "Lost",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3faed713b62bcea0a72576a1262595a1430dcf912911351f1afa09d916d162e5?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      statusClass: "status-lost"
    },
    {
      name: "Livro El Capital",
      category: "Books",
      date: "16/10/1999",
      status: "Lost",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c4d988ee97ca8c6c9e2975b22b8464dd10921acff9d62c79cf438a034a393cf?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      statusClass: "status-lost"
    },
    {
      name: "Celular Motorola FlipFlop",
      category: "Phone",
      date: "16/10/1999",
      status: "Lost",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/af9b11160267f08ddc263c41ff14179b6cd089ceefc0ef55e689eba815494c5a?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6",
      statusClass: "status-lost"
    }
  ];

}
