import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit{

  ngOnInit(): void {
    
  }

  http = inject(HttpClient);
  router = inject(Router);

  flightForm: FormGroup = new FormGroup({
    airline: new FormControl("", Validators.required),
    arrivalDate: new FormControl("", Validators.required),
    arrivalTime: new FormControl("", Validators.required),
    flightNumber: new FormControl("", Validators.required),
    numOfGuests: new FormControl(0, Validators.required),
    comments: new FormControl("")
  })

  headers = new HttpHeaders({
    'token' : 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
    'candidate' : 'mark cantrell' 
  });
  options = { headers: this.headers};

  submitFlightInfo(){
  const formValue = this.flightForm.value;
  this.http.post("https://monster-users.free.beeceptor.com", formValue, this.options).subscribe({
    next: (response) => {
      alert("Flight information sent successfully");
      this.router.navigateByUrl('/outcome');
    },
    error: (error) => {
      alert(error.error)
    }
  })
 } 

}

