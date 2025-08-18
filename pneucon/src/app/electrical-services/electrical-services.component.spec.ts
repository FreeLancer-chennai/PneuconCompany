import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalServicesComponent } from './electrical-services.component';

describe('ElectricalServicesComponent', () => {
  let component: ElectricalServicesComponent;
  let fixture: ComponentFixture<ElectricalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
