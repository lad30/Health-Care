import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-patient-report',
  templateUrl: './add-patient-report.component.html',
  styleUrls: ['./add-patient-report.component.scss']
})
export class AddPatientReportComponent implements OnInit {
  
  constructor(modalService: BsModalService, public modalRef: BsModalRef, formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalRef.hide();
  }

  submit(){
    console.log('Form Submitted');
    this.closeModal();
  }

}
