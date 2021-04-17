import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';

@NgModule({
  declarations: [
    PatientComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class PatientModule { }
