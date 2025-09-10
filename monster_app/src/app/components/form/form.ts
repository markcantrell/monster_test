import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit{

  ngOnInit(): void {
    
  }

  // flightInfo: any = {
  //   "airline" : "", 
  //   "arrivalDate" : "",
  //   "arrivalTime" : "",
  //   "flightNumber" : "",
  //   "numOfGuests" : "", 
  //   "comments?" : ""
  // }; 

  http = inject(HttpClient);

  flightForm: FormGroup = new FormGroup({
    airline: new FormControl(""),
    arrivalDate: new FormControl(""),
    arrivalTime: new FormControl(""),
    flightNumber: new FormControl(""),
    numOfGuests: new FormControl(0),
    comments: new FormControl("")
  })

 submitFlightInfo(){
  const formValue = this.flightForm.value;
  this.http.post("https://monster-users.free.beeceptor.com", formValue).subscribe({
    next: (result) => {
      alert("Flight information sent successfully");
    },
    error: (error) => {
      alert(error.error)
    }
  })
 } 
// sendFlightInfo(){
//   this.http.post("https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge", this.flightInfo).subscribe((Result:any)=>{})
//     alert("Flight information sent sucessfully")
// };

}
