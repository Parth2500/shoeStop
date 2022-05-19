import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userTitles } from 'src/app/Constants';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id = 0;
  user: User = new User(0,"","","",0,"");
  titles: string[] = userTitles;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.userService.getUserById(this.id).subscribe(data => this.user = data);
  }
  put(name:string,email:string,mobileNumber:string,primaryAddressId:string,password:string){
    this.userService.updateUser(this.id,new User(this.user.id,name,email,mobileNumber,Number.parseInt(primaryAddressId),password)).subscribe();
    this.router.navigate(['/Admin/user/']).then(() => { window.location.reload(); });
  }

}
