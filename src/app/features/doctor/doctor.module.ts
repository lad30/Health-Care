import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';


@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ModalModule.forRoot(),
    SharedModule
  ]
})
export class DoctorModule { }
