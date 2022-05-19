import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addressTitle } from 'src/app/Constants';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  id = 0;
  addressGet: Address = new Address(0,0,"","","","");
  titles: string[] = addressTitle;

  constructor(private addressService: AddressService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.addressService.getAddressById(this.id).subscribe(data => this.addressGet = data);
  }

  put(userId:string,address:string,city:string,state:string,zipcode:string){
    this.addressService.updateAddress(this.id,new Address(this.addressGet.id,Number.parseInt(userId),address,city,state,zipcode)).subscribe();
    this.router.navigate(['/Admin/address/']).then(() => { window.location.reload(); });
  }

}
