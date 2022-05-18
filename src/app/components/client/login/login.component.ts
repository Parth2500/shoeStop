import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginToggle: boolean = true;

  constructor() { }

  login(email: string, password: string) {
    console.log(email, password);
  }

  register(name:string, email: string, mobileNumber:string, password: string, confirmPassword: string) {
    console.log(name, email, mobileNumber, password, confirmPassword);
  }

  loginRegister() {
    this.loginToggle = !this.loginToggle;
  }

}
