import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addressTitle } from 'src/app/Constants';
import { AddressService } from 'src/app/services';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent {

  titles: string[] = addressTitle;
  jsonString: string = "";

  constructor(private addressService: AddressService, private router: Router) { }

  post(userId:string,address:string,city:string,state:string,zipcode:string){
    this.jsonString = '{"userId":'+userId+',"address":"'+address+'","city":"'+city+'","state":"'+state+'","zipcode":"'+zipcode+'"}';
    this.addressService.setAddress(this.jsonString).subscribe();
    this.router.navigate(['/addresses']).then(() => { window.location.reload(); });
  }
}
