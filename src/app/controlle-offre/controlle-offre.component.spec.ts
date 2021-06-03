import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlleOffreComponent } from './controlle-offre.component';

describe('ControlleOffreComponent', () => {
  let component: ControlleOffreComponent;
  let fixture: ComponentFixture<ControlleOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlleOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlleOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
