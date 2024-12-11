import {Component, Input} from '@angular/core';
import {RecentItemsLostComponent} from './recent-items-lost/recent-items-lost.component';
import {PostItemComponent} from './post-item/post-item.component';
import {CategorySecComponent} from './category-sec/category-sec.component';
import {NavComponent} from './nav/nav.component';
import {RecentItemsFoundComponent} from './recente-items-found/recent-items-found.component';
import {NavLoggedComponent} from './nav/nav-logged/nav-logged.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecentItemsLostComponent,
    PostItemComponent,
    CategorySecComponent,
    NavComponent,
    RecentItemsFoundComponent,
    NavLoggedComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() imageUrl: string = "https://cdn.builder.io/api/v1/image/assets/TEMP/af9b11160267f08ddc263c41ff14179b6cd089ceefc0ef55e689eba815494c5a?placeholderIfAbsent=true&apiKey=ce275dddc72e48378c03f0bdece66cd6";
  @Input() itemName: string = "Ceular Motorola FlipFlop";
  @Input() category: string = "Phone";
  @Input() date: string = "16/10/1999";
  @Input() status: string = "Lost";


}

