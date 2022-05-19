import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  loggedIn = false;

  constructor(private router: Router) {
    if (localStorage.getItem("AdminloggedIn") == "true"){
      this.loggedIn = true;
    }
  }

  toTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  login(value: string){
    if(value == environment.admin_password){
      localStorage.setItem("AdminloggedIn","true");
      this.loggedIn = true;
    }
    this.router.navigate(['/Admin/']).then(() => { window.location.reload(); });
  }

  logOut(){
    localStorage.setItem("AdminloggedIn","false");
      this.loggedIn = false;
  }

}
