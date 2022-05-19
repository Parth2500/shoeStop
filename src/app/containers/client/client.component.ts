import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  userName: string | null = localStorage.getItem("userName");

  constructor(private userService:UserService ) {}

  ngOnInit(): void {
  }

  logOut(){
    localStorage.setItem("userName","");
    localStorage.setItem("userId","");
    localStorage.setItem("userLoggedIn","false");
    window.location.reload();
  }

}
