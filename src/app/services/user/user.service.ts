import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  connect = environment.connection_string + "users/";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.connect);
  }
  getUserById(id:number): Observable<User>{
    return this.http.get<User>(this.connect+id);
  }
  getUserByEmail(email:string): Observable<User>{
    return this.http.get<User>(this.connect+"email/"+email);
  }
  setUser(a:User){
    return this.http.post(this.connect, a);
  }
  updateUser(id:number, a:User){
    return this.http.put(this.connect+id, a);
  }
  deleteUser(id:number){
    return  this.http.delete(this.connect+id);
  }

}
