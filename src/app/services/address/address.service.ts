import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  connect = environment.connection_string + "addresses/";

  constructor(private http:HttpClient) { }

  getAddresses(): Observable<Address[]>{
    return this.http.get<Address[]>(this.connect);
  }
  getAddressById(id:number): Observable<Address>{
    return this.http.get<Address>(this.connect+id);
  }
  getAddressByUserId(id:number): Observable<Address[]>{
    return this.http.get<Address[]>(this.connect+"user/"+id);
  }
  setAddress(a:Address){
    return this.http.post(this.connect, a);
  }
  updateAddress(id:number, a:Address){
    return this.http.put(this.connect+id, a);
  }
  deleteAddress(id:number){
    return  this.http.delete(this.connect+id);
  }
}
