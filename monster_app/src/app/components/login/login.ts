import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from "../header/header";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Header, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


 router = inject(Router);
 http = inject(HttpClient);
 

loginForm: FormGroup = new FormGroup({
  EmailId: new FormControl(""),
  Password: new FormControl("")
})

onLogin(){
  const formValue = this.loginForm.value;
  this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",formValue).subscribe({
    next:(response:any)=>{
      if (response.result){
        alert("Successful login")
        localStorage.setItem("authUserToken", response.data.token)
        this.router.navigateByUrl("/form")
      } else {
        alert(response.message)
      }
    },
    error:(error)=>{
      alert(error.statusText)
    }
  })
}

}
