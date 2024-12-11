import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemFoundComponent } from './form-item-found.component';

describe('FormItemFoundComponent', () => {
  let component: FormItemFoundComponent;
  let fixture: ComponentFixture<FormItemFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormItemFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormItemFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
