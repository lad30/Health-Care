import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-patient-report',
  templateUrl: './view-patient-report.component.html',
  styleUrls: ['./view-patient-report.component.scss']
})
export class ViewPatientReportComponent implements OnInit {

  patientReport: any;
  patientReportObjectKeys = [];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    if(this.patientReport){
      this.patientReportObjectKeys = Object.keys(this.patientReport);
    }
  }

  closeModal() {
    this.bsModalRef.hide();
  }

}
