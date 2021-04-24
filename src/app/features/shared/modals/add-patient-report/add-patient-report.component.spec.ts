import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientReportComponent } from './add-patient-report.component';

describe('AddPatientReportComponent', () => {
  let component: AddPatientReportComponent;
  let fixture: ComponentFixture<AddPatientReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
