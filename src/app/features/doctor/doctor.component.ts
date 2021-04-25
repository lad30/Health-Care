import { Component, OnInit } from '@angular/core';
import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { AddPatientReportComponent } from '../shared/modals/add-patient-report/add-patient-report.component';
import { ViewPatientReportComponent } from '../shared/modals/view-patient-report/view-patient-report.component';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  patientData = {
    Name: 'Hrithvik Lad',
    Disease: 'Influenza'
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(){
    const config: ModalOptions = {
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-md modalCustom'
    };

    // Open Modal
    const addPatientReportRef = this.modalService.show(AddPatientReportComponent, {...config});

  }

  viewReportModal(){
    const config: ModalOptions = {
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-md modalCustom'
    };

    const initialState = {
      patientReport: this.patientData
    }

    // Open Modal
    this.modalService.show(ViewPatientReportComponent, {...config, initialState});

  }

}
