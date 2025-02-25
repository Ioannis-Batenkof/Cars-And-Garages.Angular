import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesDetailsComponent } from './garages-details.component';

describe('GaragesDetailsComponent', () => {
  let component: GaragesDetailsComponent;
  let fixture: ComponentFixture<GaragesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
