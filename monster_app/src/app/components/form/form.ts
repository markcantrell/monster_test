import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface FormData {
  airline: FormControl<string>;
  arrivalDate: FormControl<string>;
  arrivalTime: FormControl<string>;
  flightNumber: FormControl<string>;
  numOfGuests: FormControl<number>;
  comments: FormControl<string>;
}

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {


  http = inject(HttpClient);
  router = inject(Router);



  flightForm: FormGroup<FormData> = new FormGroup<FormData>({
    airline: new FormControl("", { nonNullable: true, validators: Validators.required }),
    arrivalDate: new FormControl("", { nonNullable: true, validators: Validators.required }),
    arrivalTime: new FormControl("", { nonNullable: true, validators: Validators.required }),
    flightNumber: new FormControl("", { nonNullable: true, validators: Validators.required }),
    numOfGuests: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d+$/) ]}),
    comments: new FormControl("", { nonNullable: true })
  })

  headers = new HttpHeaders({
    'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
    'candidate': 'mark cantrell'
  });
  options = { headers: this.headers };

  submitFlightInfo() {
    const formValue = this.flightForm.value;
    this.http.post("https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge", formValue, this.options).subscribe({
      next: (response) => {
        alert("Flight information sent successfully");
        this.router.navigateByUrl('/outcome');
      },
      error: (error) => {
        alert(error)
      }
    })
  }

}

