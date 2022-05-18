import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { orderTitles, status } from 'src/app/Constants';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent {

  id = 0;
  order: any;
  titles: string[] = orderTitles;
  statuses: string[] = status;
  jsonString: string = "";

  constructor(private orderService:OrderService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.get();
  }

  get(){
    this.orderService.getOrderById(this.id).subscribe(data => this.order = data);
  }
  put(userId:string,productId:string,quantity:string,addressId:string,status:string,createdDate:string,deliveredDate:string){
    this.jsonString = '{"id": '+this.id+',"userId":'+userId+',"productId":'+productId+',"quantity":'+quantity+',"addressId":'+addressId+',"status":"'+status+'","createdDate":"'+createdDate+'","deliveredDate":"'+deliveredDate+'"}';
    this.orderService.updateOrder(this.id,this.jsonString).subscribe();
    this.router.navigate(['/Admin/order/']).then(() => { window.location.reload(); });
  }

}
