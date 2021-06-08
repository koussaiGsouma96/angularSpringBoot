import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlleClientComponent } from './controlle-client.component';

describe('ControlleClientComponent', () => {
  let component: ControlleClientComponent;
  let fixture: ComponentFixture<ControlleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlleClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
