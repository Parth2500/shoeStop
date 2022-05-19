import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute, Router } from "@angular/router";
import { categories, brands, colors, productTitles } from 'src/app/Constants';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id = 0;
  product: Product = new Product(0,"","","",0,"",0,"",0,"");
  titles: string[] = productTitles;
  categories: string[] = categories;
  brands: string[] = brands;
  colors: string[] = colors;
  jsonString: string = "";

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.getProductById(this.id).subscribe(data => this.product = data);
  }
  put(brand:string,productName:string,description:string,price:string,category:string,size:string,color:string,quantity:string,imageUrl:string){
    this.productService.updateProduct(this.id,new Product(this.product.id,brand,productName,description,Number.parseInt(price),category,Number.parseInt(size),color,Number.parseInt(quantity),imageUrl)).subscribe();
    this.router.navigate(['/Admin/product/']).then(() => { window.location.reload(); });
  }

}
