import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: any;

  constructor(private productService: ProductService) {
    this.get();
  }

  get(){
    this.productService.getProducts().subscribe(data => this.products = data);
  }

}
