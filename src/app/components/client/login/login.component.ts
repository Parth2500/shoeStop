import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User | undefined ; 
  loginToggle: boolean = true;
  loggedIn: boolean = false;
  registeruser: boolean = false;
  passwordl: boolean = false;
  passwordr: boolean = false;

  constructor(private userService: UserService, private router: Router) { 
  }

  login(email: string, password: string) {
    this.userService.getUserByEmail(email).subscribe( data => this.user = data );
    if(this.user){
      if(password == this.user.password){
        this.loggedIn = true;
        localStorage.setItem("userName",this.user.name);
        localStorage.setItem("userId",this.user.id.toString());
        localStorage.setItem("userLoggedIn","true");
        this.router.navigate(['/Home']).then(() => { window.location.reload(); });
      }
      else{
        this.passwordl = true;
      }
    }
  }

  register(name:string, email: string, mobileNumber:string, password: string, confirmPassword: string) {
    if(confirmPassword == password){
      this.userService.setUser(new User(0,name,email,mobileNumber,0,password)).subscribe();
      this.router.navigate(['/Home']).then(() => { window.location.reload(); });
    }else{
      this.passwordr = true;
    }
  }

  loginRegister() {
    this.loginToggle = !this.loginToggle;
  }

  

}
