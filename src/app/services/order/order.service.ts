import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  connect = environment.connection_string + "orders/";

  constructor(private http:HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.connect);
  }
  getOrderById(id:number): Observable<Order>{
    return this.http.get<Order>(this.connect+id);
  }
  setOrder(a:Order): Observable<Order>{
    console.log(a);
    try{
      return this.http.post<Order>(this.connect, a);
    }catch(e){
      console.log(e);
      return new Observable<Order>();
    }
  }
  updateOrder(id:number, a:Order){
    return this.http.put(this.connect+id, a);
  }
  deleteOrder(id:number){
    return  this.http.delete(this.connect+id);
  }
}
