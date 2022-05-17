import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userTitles } from 'src/app/Constants';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  id = 0;
  user: any;
  titles: string[] = userTitles;
  jsonString: string = "";

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.get();
  }

  get(){
    this.userService.getUserById(this.id).subscribe(data => this.user = data);
  }
  put(name:string,email:string,mobileNumber:string,primaryAddressId:string,password:string){
    this.jsonString = '{"id": '+this.id+',"name":"'+name+'","email":"'+email+'","mobileNumber":"'+mobileNumber+'","primaryAddressId":'+primaryAddressId+',"password":"'+password+'"}';
    this.userService.updateUser(this.id,this.jsonString).subscribe();
    this.router.navigate(['/users']).then(() => { window.location.reload(); });
  }

}
