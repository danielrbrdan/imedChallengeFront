import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorDialogComponent } from './doctor-dialog/doctor-dialog.component';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  
  doctors: { name: string; prof: string; }[] | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.doctors = [{name:"docA", prof:"piscico"},{name:"docB", prof:"geral"},{name:"docB", prof:"geral"},{name:"docB", prof:"geral"},{name:"docB", prof:"geral"},{name:"docB", prof:"geral"},{name:"docB", prof:"geral"},{name:"docB", prof:"geral"}]
  }

  createHex() :String{
    let hexCode1 = "";
    var hexValues1 = "0123456789abcdef";
    
    for ( let i = 0; i < 6; i++ ) {
      hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    }
    return hexCode1;
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

