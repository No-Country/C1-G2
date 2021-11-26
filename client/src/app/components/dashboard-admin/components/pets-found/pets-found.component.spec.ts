import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsFoundComponent } from './pets-found.component';

describe('PetsFoundComponent', () => {
  let component: PetsFoundComponent;
  let fixture: ComponentFixture<PetsFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
