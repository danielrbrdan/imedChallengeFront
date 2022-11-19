import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorService } from 'src/services/doctor.service';
import { DoctorDialogComponent } from './doctor-dialog/doctor-dialog.component';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  
  doctors: any;

  constructor(public dialog: MatDialog, public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.findAll().subscribe((response: any)=>{
      this.doctors = response
    });
  }
  openDialog(doctor:Object){
    const dialogRef = this.dialog.open(DoctorDialogComponent,{
      data: doctor,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

