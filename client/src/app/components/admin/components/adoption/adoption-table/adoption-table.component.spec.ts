import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionTableComponent } from './adoption-table.component';

describe('PetsAdoptionComponent', () => {
  let component: AdoptionTableComponent;
  let fixture: ComponentFixture<AdoptionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
