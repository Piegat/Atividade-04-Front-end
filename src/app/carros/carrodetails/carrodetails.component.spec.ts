import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrodetailsComponent } from './carrodetails.component';

describe('CarrodetailsComponent', () => {
  let component: CarrodetailsComponent;
  let fixture: ComponentFixture<CarrodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrodetailsComponent]
    });
    fixture = TestBed.createComponent(CarrodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
