import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { orderTitles, status } from 'src/app/Constants';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {

  titles: string[] = orderTitles;
  statuses: string[] = status;

  constructor(private orderService:OrderService, private router: Router) { }

  post(userId:string,productId:string,quantity:string,addressId:string,status:string,createdDate:string,deliveredDate:string){
    this.orderService.setOrder(new Order(0,Number.parseInt(userId),Number.parseInt(productId),Number.parseInt(quantity),Number.parseInt(addressId),status,createdDate,deliveredDate)).subscribe();
    this.router.navigate(['/Admin/order/']).then(() => { window.location.reload(); });
  }

}
