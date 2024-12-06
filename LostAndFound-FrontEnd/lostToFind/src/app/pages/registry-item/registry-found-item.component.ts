import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FoundItem} from '../../../shared/models/found-item';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../shared/urls';
import {PageComponent} from '../page.component';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {AutofocusDirective} from '../../../shared/directives/auto-focus-directive';
import {MatCheckbox} from '@angular/material/checkbox';
import {NgIf} from '@angular/common';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-registry-item',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    AutofocusDirective,
    MatLabel,
    MatCheckbox,
    NgIf,
    MatRadioButton,
    MatRadioGroup,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './registry-found-item.component.html',
  styleUrl: './registry-found-item.component.css'
})
export class RegistryFoundItemComponent extends PageComponent<FoundItem> implements OnInit {
  public object: FoundItem = new FoundItem();
  public formGroup: FormGroup;

  constructor(private http: HttpClient) {
    super(http,URLS.FOUND_ITEM);
  }


  ngOnInit() {
    this.formGroup = new FormGroup({
      title : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      date_found : new FormControl('', [Validators.required, Validators.required]),
      is_resolved : new FormControl('', [Validators.required, Validators.required]),
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
        this.goToPage('home')
      })
    }

  }



}
