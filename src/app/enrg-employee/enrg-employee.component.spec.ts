import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrgEmployeeComponent } from './enrg-employee.component';

describe('EnrgEmployeeComponent', () => {
  let component: EnrgEmployeeComponent;
  let fixture: ComponentFixture<EnrgEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrgEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrgEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
