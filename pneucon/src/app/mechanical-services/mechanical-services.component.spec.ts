import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalServicesComponent } from './mechanical-services.component';

describe('MechanicalServicesComponent', () => {
  let component: MechanicalServicesComponent;
  let fixture: ComponentFixture<MechanicalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicalServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MechanicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
