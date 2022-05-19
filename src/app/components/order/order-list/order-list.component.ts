import { Component, OnInit } from '@angular/core';
import { orderTitles1, status } from 'src/app/Constants';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] | undefined;
  titles: string[] = orderTitles1;
  status: string[] = status;
  
  constructor(private orderService:OrderService) { }

  checkStatus(status: string): boolean{
    switch(status) {
      case "Processing":
        return false;
      case "Delivered":
        return true;
      case "Cancelled":
        return true;
      default:
        return false;
    }
  }

  ngOnInit(){
    this.orderService.getOrders().subscribe(data => this.orders = data);
  }
  delete(id:number){
    this.orderService.deleteOrder(id).subscribe();
    location.reload();
  }

}
