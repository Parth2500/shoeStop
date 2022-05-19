import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { orderTitles, status } from 'src/app/Constants';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  id = 0;
  order: Order = new Order(0,0,0,0,0,"","","");
  titles: string[] = orderTitles;
  statuses: string[] = status;

  constructor(private orderService:OrderService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.orderService.getOrderById(this.id).subscribe(data => this.order = data);
  }
  put(userId:string,productId:string,quantity:string,addressId:string,status:string,createdDate:string,deliveredDate:string){
    this.orderService.updateOrder(this.id,new Order(this.order.id,Number.parseInt(userId),Number.parseInt(productId),Number.parseInt(quantity),Number.parseInt(addressId),status,createdDate,deliveredDate)).subscribe();
    this.router.navigate(['/Admin/order/']).then(() => { window.location.reload(); });
  }

}
