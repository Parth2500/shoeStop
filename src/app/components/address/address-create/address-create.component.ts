import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addressTitle } from 'src/app/Constants';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent {

  titles: string[] = addressTitle;

  constructor(private addressService: AddressService, private router: Router) { }

  post(userId:string,address:string,city:string,state:string,zipcode:string){
    this.addressService.setAddress(new Address(0,Number.parseInt(userId),address,city,state,zipcode)).subscribe();
    this.router.navigate(['/Admin/address/']).then(() => { window.location.reload(); });
  }
}
