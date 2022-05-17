import { Component } from '@angular/core';
import { productTitles1 } from 'src/app/Constants';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  products: any;
  titles: string[] = productTitles1;

  constructor(private productService: ProductService) {
    this.get();
  }

  get(){
    this.productService.getProducts().subscribe(data => this.products = data);
  }
  delete(id:number){
    this.productService.deleteProduct(id).subscribe();
    location.reload();
  }
}
