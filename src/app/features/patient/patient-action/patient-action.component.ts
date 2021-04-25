import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-action',
  templateUrl: './patient-action.component.html',
  styleUrls: ['./patient-action.component.scss']
})
export class PatientActionComponent implements OnInit {

  public params: any;
  rowData: any;

  agInit(params: any): void {
    this.params = params;
    this.rowData = params.data;
  }

  constructor() { }

  ngOnInit() {
  }

}
