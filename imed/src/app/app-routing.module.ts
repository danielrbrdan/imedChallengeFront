import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './patient/appointments/appointments.component';
import { DoctorsComponent } from './patient/doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: 'patient', component: PatientComponent,
    children: [
    { path: 'patientAppointments', component: AppointmentsComponent },
    { path: 'patientDoctors', component: DoctorsComponent },
  ],
  canActivate: [AuthGuardGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
