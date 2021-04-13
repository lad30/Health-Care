import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'patient', loadChildren: () => import('../patient/patient.module').then(m => m.PatientModule) },
      { path: 'doctor', loadChildren: () => import('../doctor/doctor.module').then(m => m.DoctorModule) },
      { path: 'tester', loadChildren: () => import('../tester/tester.module').then(m => m.TesterModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
