import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userTitles } from 'src/app/Constants';
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
    this.jsonString = '{"name":"'+name+'","email":"'+email+'","mobileNumber":"'+mobileNumber+'","primaryAddressId":'+primaryAddressId+',"password":"'+password+'"}';
    this.userService.setUser(this.jsonString).subscribe();
    this.router.navigate(['/Admin/user/']).then(() => { window.location.reload(); });
  }

}
