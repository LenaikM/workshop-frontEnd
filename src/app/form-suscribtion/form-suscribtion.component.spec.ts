import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuscribtionComponent } from './form-suscribtion.component';

describe('FormSuscribtionComponent', () => {
  let component: FormSuscribtionComponent;
  let fixture: ComponentFixture<FormSuscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuscribtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSuscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
