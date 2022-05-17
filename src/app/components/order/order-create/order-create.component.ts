import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { orderTitles, status } from 'src/app/Constants';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {

  titles: string[] = orderTitles;
  statuses: string[] = status;
  jsonString: string = "";

  constructor(private orderService:OrderService, private router: Router) { }

  post(userId:string,productId:string,quantity:string,addressId:string,status:string,createdDate:string,deliveredDate:string){
    this.jsonString = '{"userId": '+userId+',"productId":'+productId+',"quantity":'+quantity+',"addressId":'+addressId+',"status":"'+status+'","createdDate":"'+createdDate+'","deliveredDate":"'+deliveredDate+'"}';
    this.orderService.setOrder(this.jsonString).subscribe();
    this.router.navigate(['/orders']).then(() => { window.location.reload(); });
  }

}
