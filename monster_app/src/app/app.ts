import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',  
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('monster_app');

  loggedUser: string = '';

  constructor(){
    const loggedData = localStorage.getItem("authUser"); 

    if(loggedData != null){
      this.loggedUser = loggedData;
    }
  }
}
