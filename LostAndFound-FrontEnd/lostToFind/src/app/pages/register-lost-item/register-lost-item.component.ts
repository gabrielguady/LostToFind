import {Component, OnInit} from '@angular/core';
import {PageComponent} from '../page.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../../../shared/urls';
import {LostItem} from '../../../shared/models/lost-item';
import {MatButton} from '@angular/material/button';
import {MatError} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-register-lost-item',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatInput,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './register-lost-item.component.html',
  styleUrl: './register-lost-item.component.css'
})
export class RegisterLostItemComponent extends PageComponent<LostItem> implements OnInit {
  public object: LostItem = new LostItem();
  public formGroup: FormGroup;


  constructor(private http: HttpClient) {
    super(http, URLS.LOST_ITEM);
  }


  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      last_seen_details: new FormControl('', [Validators.required]),
      reward: new FormControl('', [Validators.required]),
      date_lost: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    })
  }

  public saveOrUpdate(): void {
    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      Object.keys(this.formGroup.controls).forEach(key => {
        const value = this.formGroup.getRawValue()[key];
        if (value !== null && value !== undefined) {
          this.object[key] = value;
        }
      });
      this.service.save(this.object).subscribe((response: LostItem) => {
        this.goToPage('home')
      })
    }

  }
}
