import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    eventClick:this.eventClick.bind(this),
    events: [
      { title: 'event 1', date: '2022-11-01' },
      { title: 'event 2', date: '2022-11-20' }
    ]
  };

  handleDateClick(arg: Object) {
    console.log(arg)
  }
  
  eventClick(arg: EventClickArg) {
    console.log(arg)
  }

}


