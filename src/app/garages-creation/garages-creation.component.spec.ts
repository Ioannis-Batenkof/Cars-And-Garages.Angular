import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesCreationComponent } from './garages-creation.component';

describe('GaragesCreationComponent', () => {
  let component: GaragesCreationComponent;
  let fixture: ComponentFixture<GaragesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragesCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
