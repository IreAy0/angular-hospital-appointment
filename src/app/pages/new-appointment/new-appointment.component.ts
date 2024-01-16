import { Component } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  appointmentData: any = {
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2024-1-2T05:50:31.728Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": ""
  };

  constructor(private master: MasterService, private router: Router){}

  onSaveAppointment() {
    console.log('here')
    this.master.createNew(this.appointmentData).subscribe((res:any)=>{
      if(res.result) {
        this.router.navigate(['/list']);
      }
    },errror => {
      alert("API Error/ Check Form")
    })
  }
  
}
