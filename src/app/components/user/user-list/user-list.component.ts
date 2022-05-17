import { Component } from '@angular/core';
import { userTitles } from 'src/app/Constants';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: any;
  titles: string[] = userTitles;

  constructor(private userService: UserService) { 
    this.get();
  }

  get(){
    this.userService.getUsers().subscribe(data => this.users = data);
  }
  delete(id:number){
    this.userService.deleteUser(id).subscribe();
    location.reload();
  }

}
