import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCreationComponent } from './cars-creation.component';

describe('CarsCreationComponent', () => {
  let component: CarsCreationComponent;
  let fixture: ComponentFixture<CarsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
