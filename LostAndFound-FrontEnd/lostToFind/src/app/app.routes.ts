import {Routes} from '@angular/router';
import {LostItemListComponent} from '../base/lost-item-list/lost-item-list.component';
import {FoundItemListComponent} from '../base/item-found-list/found-item-list.component';
import {LostItemCreateComponent} from '../base/lost-item-list/lost-item-create/lost-item-create.component';
import {FoundItemCreateComponent} from '../base/item-found-list/found-item-create/found-item-create.component';

export const routes: Routes = [
  {path: 'lost_item', component: LostItemListComponent},
  {path: 'found_item', component: FoundItemListComponent},
  {path:'lost_item/:action', component: LostItemCreateComponent},
  {path:'found_item/:action', component: FoundItemCreateComponent},
];
