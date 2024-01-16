import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{


  appointmentList: any[] = [];
  listType: string = '';
  searchText: string = '';
  selectedCategory: string = '';
  categories: string[] = [];  // Replace this with your actual list of categories

  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  constructor(private master: MasterService){

  }

  ngOnInit(): void {
    this.getTodaysAppointments();
    this.categories = ['Appointment number', 'Appointment Date', 'Appointment Time'];
  }

  getTodaysAppointments() {
    this.master.getAllTodaysAppointment().subscribe((res:any) => {
      this.appointmentList =  res.data;
      this.listType= 'Today'
    },
    error=> {
      alert('API error Occoured')
    })
  }

  getAllAppointments() {
    this.master.getAllAppointment().subscribe((res:any) => {
      this.appointmentList =  res.data;
      this.listType = 'All'
    },
    error=> {
      alert('API error Occoured')
    })
  }

  markDone(appointmentId:number) {

    this.master.markAppointmentDone(appointmentId).subscribe((res:any) => {
      this.getTodaysAppointments();
    },
    error=> {
      alert('API error Occoured')
    })
  }

 

}
