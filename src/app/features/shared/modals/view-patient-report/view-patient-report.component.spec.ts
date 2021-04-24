import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientReportComponent } from './view-patient-report.component';

describe('ViewPatientReportComponent', () => {
  let component: ViewPatientReportComponent;
  let fixture: ComponentFixture<ViewPatientReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
