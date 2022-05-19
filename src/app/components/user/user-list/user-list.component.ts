import { Component, OnInit } from '@angular/core';
import { userTitles1 } from 'src/app/Constants';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined;
  titles: string[] = userTitles1;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  delete(id:number){
    this.userService.deleteUser(id).subscribe();
    location.reload();
  }

}
