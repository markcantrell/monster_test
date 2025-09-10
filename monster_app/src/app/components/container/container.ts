import { Component, inject } from '@angular/core';
import { App } from "../../app";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  imports: [App,],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
