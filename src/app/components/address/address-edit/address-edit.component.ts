import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addressTitle } from 'src/app/Constants';
import { AddressService } from 'src/app/services';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent {

  id = 0;
  addressGet: any;
  titles: string[] = addressTitle;
  jsonString: string = "";

  constructor(private addressService: AddressService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.get();
  }

  get(){
    try{
      this.addressService.getAddressById(this.id).subscribe(data => this.addressGet = data);
      console.log(this.addressGet);
    }catch(e){
      console.log(e);
    }
    
  }

  put(userId:string,address:string,city:string,state:string,zipcode:string){
    this.jsonString = '{"id": '+this.id+',"userId":'+userId+',"address":"'+address+'","city":"'+city+'","state":"'+state+'","zipcode":"'+zipcode+'"}';
    this.addressService.updateAddress(this.id,this.jsonString).subscribe();
    this.router.navigate(['/addresses']).then(() => { window.location.reload(); });
  }

}
