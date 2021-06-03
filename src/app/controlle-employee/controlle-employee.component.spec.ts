import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlleEmployeeComponent } from './controlle-employee.component';

describe('ControlleEmployeeComponent', () => {
  let component: ControlleEmployeeComponent;
  let fixture: ComponentFixture<ControlleEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlleEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
