import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent{

  id = 0;
  product: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    }
  );
  this.get();
  }

  get(){
    this.productService.getProductById(this.id).subscribe(data => this.product = data);
  }

}
