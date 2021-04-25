import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../shared/shared.module';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientActionComponent } from './patient-action/patient-action.component';

@NgModule({
  declarations: [
    PatientComponent,
    PatientListComponent,
    PatientActionComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AgGridModule.withComponents([]),
    SharedModule
  ]
})
export class PatientModule { }
