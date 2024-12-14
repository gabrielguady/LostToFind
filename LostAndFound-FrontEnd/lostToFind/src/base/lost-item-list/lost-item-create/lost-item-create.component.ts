import {Component, OnInit} from '@angular/core';
import {PageComponent} from '../../page.component';
import {FoundItem} from '../../../shared/models/found-item';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../shared/urls';
import {MatError, MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {LostItem} from '../../../shared/models/lost-item';
import {MatInput} from '@angular/material/input';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-lost-item-create',
  standalone: true,
  imports: [
    MatError,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    AutofocusDirective,
    MatButton,
    MatFormFieldModule
  ],
  templateUrl: './lost-item-create.component.html',
  styleUrl: './lost-item-create.component.css'
})
export class LostItemCreateComponent extends PageComponent<LostItem> implements OnInit {
  public formGroup: FormGroup;
  public object: LostItem = new LostItem();


  constructor(private http: HttpClient) {
    super(http,URLS.LOST_ITEM)
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title : new FormControl('', [Validators.required]),
      last_seen_details : new FormControl('', [Validators.required])
    })
  }

  public saveOrUpdate(): void {
    if (this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach(key => {
        const value = this.formGroup.getRawValue()[key];
        if (value !== null && value !== undefined) {
          this.object[key] = value;
        }
      });
      this.service.save(this.object).subscribe((response: LostItem ) => {
        this.goToPage('lost_item')
      })
    }

  }
}
