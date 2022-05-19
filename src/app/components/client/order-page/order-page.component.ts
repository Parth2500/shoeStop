import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  addToggle: boolean = false;
  productId = 0;
  userIdS:string | null = "";
  userIdN: number= 0;
  addresses: Address[] | undefined;
  product: Product = new Product(0,"","","",0,"",0,"",0,"");

  constructor(private productService: ProductService,private addressService: AddressService,private orderService: OrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.productService.getProductById(this.productId).subscribe(data => this.product = data);
    console.log(localStorage.getItem("userId"));
    if(typeof localStorage.getItem("userId") !== null){
      this.userIdS = localStorage.getItem("userId");
      if(typeof this.userIdS === 'string'){
        this.addressService.getAddressByUserId(Number.parseInt(this.userIdS)).subscribe(data => this.addresses = data);
        console.log(this.addresses);
        this.userIdN = Number.parseInt(this.userIdS);
      }
    }
  }

  addTogMeth(){
    this.addToggle = !this.addToggle;
  }

  addAddress(address:string,city:string,state:string,zipcode:string){
    this.addressService.setAddress(new Address(0,this.userIdN,address,city,state,zipcode)).subscribe();
    this.addTogMeth();
    location.reload();
  }

  placeOrder(addressId:string,quantity:string){
    this.orderService.setOrder(new Order(0,this.userIdN,Number.parseInt(this.productId.toString()),Number.parseInt(quantity),Number.parseInt(addressId),"Processing",new Date().toJSON(),(new Date(new Date().setDate(new Date().getDate() + 7))).toJSON())).subscribe();
  }
}
