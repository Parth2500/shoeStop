import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  connect = environment.connection_string + "products/";

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.connect);
  }
  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(this.connect + id);
  }
  setProduct(a:Product){
    return this.http.post(this.connect, a);
  }
  updateProduct(id:number, a:Product){
    return this.http.put(this.connect + id, a);
  }
  deleteProduct(id:number){
    return this.http.delete(this.connect + id);
  }
}
