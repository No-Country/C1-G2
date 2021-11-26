import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsLostComponent } from './pets-lost.component';

describe('PetsLostComponent', () => {
  let component: PetsLostComponent;
  let fixture: ComponentFixture<PetsLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsLostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
