import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPublishFormComponent } from './adoption-publish-form.component';

describe('AdoptionPublishFormComponent', () => {
  let component: AdoptionPublishFormComponent;
  let fixture: ComponentFixture<AdoptionPublishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionPublishFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPublishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
