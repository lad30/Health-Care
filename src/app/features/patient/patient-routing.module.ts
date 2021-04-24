import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';


const routes: Routes = [
  {
    path: '',
    component: PatientComponent
  },
  {
    path: 'list',
    component: PatientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
