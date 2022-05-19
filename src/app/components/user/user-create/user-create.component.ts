import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userTitles } from 'src/app/Constants';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  user: any;
  titles: string[] = userTitles;
  jsonString: string = "";

  constructor(private userService: UserService, private router: Router) { }

  post(name:string,email:string,mobileNumber:string,primaryAddressId:string,password:string){
    this.userService.setUser(new User(0,name,email,mobileNumber,Number.parseInt(primaryAddressId),password)).subscribe();
    this.router.navigate(['/Admin/user/']).then(() => { window.location.reload(); });
  }

}
