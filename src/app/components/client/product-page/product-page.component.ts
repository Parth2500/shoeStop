import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  id = 0;
  user: boolean = false;
  product: Product = new Product(0,"","","",0,"",0,"",0,"");

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.getProductById(this.id).subscribe(data => this.product = data);
    if(localStorage.getItem("userId") != ""){
      this.user = true;
    }
  }
}
