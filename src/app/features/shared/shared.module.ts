import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedRoutingModule } from './shared-routing.module';
import { TableSearchComponent } from './components/table-search/table-search.component';
import { AddPatientReportComponent } from './modals/add-patient-report/add-patient-report.component';
import { ViewPatientReportComponent } from './modals/view-patient-report/view-patient-report.component';


@NgModule({
  declarations: [TableSearchComponent, AddPatientReportComponent, ViewPatientReportComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableSearchComponent,
    AddPatientReportComponent,
    ViewPatientReportComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
