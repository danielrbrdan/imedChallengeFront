import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-dialog',
  templateUrl: './doctor-dialog.component.html',
  styleUrls: ['./doctor-dialog.component.scss']
})
export class DoctorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DoctorDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log(data);
      this.data = {...data};
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
