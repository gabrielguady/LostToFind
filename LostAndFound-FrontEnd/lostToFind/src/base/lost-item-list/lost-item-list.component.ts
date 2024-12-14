import {Component} from '@angular/core';
import {URLS} from '../../shared/urls';
import {AppService} from '../../shared/services/app.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatCard} from '@angular/material/card';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef, MatTable
} from '@angular/material/table';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {LostItem} from '../../shared/models/lost-item';


@Component({
  selector: 'app-item-lost-list',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatIcon,
    MatCard,
    MatHeaderCell,
    MatCell,
    MatIconButton,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatColumnDef,
    MatCellDef,
    MatFabButton,
    MatTable,
    MatHeaderCellDef,
    MatFormFieldModule
  ],
  templateUrl: './lost-item-list.component.html',
  styleUrl: './lost-item-list.component.css'
})
export class LostItemListComponent{
  public dataSource: LostItem[] = [];
  public displayedColumns = ['id', 'title', 'last_seen_details', 'actions'];
  public searchName: string = '';
  public searchLastseen: string =  '';

  private router: Router = new Router();

  private service: AppService<LostItem>

  private parameters: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
    this.service =  new AppService<LostItem>(http,URLS.LOST_ITEM)
  }
  ngOnInit(): void {
    this.search();
  }

  public search(resetIndex: boolean = false): void {
    this.service.clearParameter();
    this.service.addParameter('title', this.searchName);
    this.service.addParameter('last_seen_details', this.searchLastseen);
    this.service.getAll().subscribe({
      next: (data: LostItem[]) => {
        this.dataSource = data;
        console.log('Lost Item loaded: ', data);
      },
      error: (error) => {
        console.error('error loading Lost Item: ');
      }
    });
  }
  public deleteObject(id:number): void {
    this.service.delete(id).subscribe({
      next: (_) => {
        this.search()
      },
      error: (error) => {
        console.error('error delete Lost Item: ');
      }
    })
  }

  public goToPage(route: string): void {
    const extras: NavigationExtras= {queryParamsHandling: "merge"}
    this.router.navigate([route], extras).then();
  }


}
