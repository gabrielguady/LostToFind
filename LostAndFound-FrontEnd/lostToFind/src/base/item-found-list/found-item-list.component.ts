import { Component } from '@angular/core';
import {FoundItem} from '../../shared/models/found-item';
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

@Component({
  selector: 'app-item-found-list',
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
  templateUrl: './found-item-list.component.html',
  styleUrl: './found-item-list.component.css'
})
export class FoundItemListComponent {
  public dataSource: FoundItem[] = [];
  public displayedColumns = ['id', 'title', 'description', 'actions'];
  public searchName: string = '';
  public searchRegistraction: string =  '';

  private router: Router = new Router();

  private service: AppService<FoundItem>

  private parameters: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
    this.service =  new AppService<FoundItem>(http,URLS.FOUND_ITEM)
  }
  ngOnInit(): void {
    this.search();
  }

  public search(resetIndex: boolean = false): void {
    this.service.clearParameter();
    this.service.addParameter('title', this.searchName);
    this.service.addParameter('description', this.searchRegistraction);
    this.service.getAll().subscribe({
      next: (data: FoundItem[]) => {
        this.dataSource = data;
        console.log('Found Item loaded: ', data);
      },
      error: (error) => {
        console.error('error loading Found Item: ');
      }
    });
  }
  public deleteObject(id:number): void {
    this.service.delete(id).subscribe({
      next: (_) => {
        this.search()
      },
      error: (error) => {
        console.error('error delete Found Item: ');
      }
    })
  }

  public goToPage(route: string): void {
    const extras: NavigationExtras= {queryParamsHandling: "merge"}
    this.router.navigate([route], extras).then();
  }


}
