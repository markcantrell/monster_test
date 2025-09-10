import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit{

  ngOnInit(): void {
    
  }

  flightInfo: any = {
    "airline" : "", 
    "arrivalDate" : "",
    "arrivalTime" : "",
    "flightNumber" : "",
    "numOfGuests" : "", 
    "comments?" : ""
  }; 

  http = inject(HttpClient);

// sendFlightInfo(){
//   this.http.post("https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge", this.flightInfo).subscribe((Result:any)=>{})
//     alert("Flight information sent sucessfully")
// };

}
