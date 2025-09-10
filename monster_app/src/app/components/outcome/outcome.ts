import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outcome',
  imports: [],
  templateUrl: './outcome.html',
  styleUrl: './outcome.css'
})
export class Outcome {

  router = inject(Router); 

  logoff(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
