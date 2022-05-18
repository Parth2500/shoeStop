import { Component } from '@angular/core';
import { addressTitle1 } from 'src/app/Constants';
import { AddressService } from 'src/app/services';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {

  addresses: any;
  titles: string[] = addressTitle1;

  constructor(private addressService: AddressService) { 
    this.get();
  }

  get(){
    this.addressService.getAddresses().subscribe(data => this.addresses = data);
  }
  delete(id:number){
    this.addressService.deleteAddress(id).subscribe();
    location.reload();
  }

}
