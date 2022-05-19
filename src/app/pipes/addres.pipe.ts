import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/address';

@Pipe({
  name: 'addres'
})
export class AddresPipe implements PipeTransform {

  transform(value: Address): string {
    return (value.address + ", " + value.city + "-" + value.zipcode + ", " + value.state);
  }

}
