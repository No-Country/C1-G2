import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAdoptionComponent } from './pets-adoption.component';

describe('PetsAdoptionComponent', () => {
  let component: PetsAdoptionComponent;
  let fixture: ComponentFixture<PetsAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
