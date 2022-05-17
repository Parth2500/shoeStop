import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  connect = environment.connection_string + "products/";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.connect);
  }
  getProductById(id:number){
    return this.http.get(this.connect + id);
  }
  setProduct(a:string){
    return this.http.post(this.connect, JSON.parse(a));
  }
  updateProduct(id:number, a:string){
    return this.http.put(this.connect + id, JSON.parse(a));
  }
  deleteProduct(id:number){
    return this.http.delete(this.connect + id);
  }
}
