import {Component, OnInit} from '@angular/core';
import {FoundItem} from '../../../shared/models/found-item';
import {URLS} from '../../../shared/urls';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PageComponent} from '../../page.component';
import {MatError, MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-found-item-create',
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
  templateUrl: './found-item-create.component.html',
  styleUrl: './found-item-create.component.css'
})
export class FoundItemCreateComponent extends PageComponent<FoundItem> implements OnInit {
  public formGroup: FormGroup;
  public object: FoundItem = new FoundItem();


  constructor(private http: HttpClient) {
    super(http,URLS.FOUND_ITEM)
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required])
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
      this.service.save(this.object).subscribe((response: FoundItem ) => {
        this.goToPage('found_item')
      })
    }

  }
}
