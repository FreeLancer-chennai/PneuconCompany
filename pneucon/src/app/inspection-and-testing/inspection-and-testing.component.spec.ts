import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionAndTestingComponent } from './inspection-and-testing.component';

describe('InspectionAndTestingComponent', () => {
  let component: InspectionAndTestingComponent;
  let fixture: ComponentFixture<InspectionAndTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionAndTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectionAndTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
