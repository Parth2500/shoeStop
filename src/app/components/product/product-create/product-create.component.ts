import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';
import { brands, categories, colors, productTitles } from 'src/app/Constants';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent{

  titles: string[] = productTitles;
  categories: string[] = categories;
  brands: string[] = brands;
  colors: string[] = colors;


  constructor(private productService: ProductService, private router: Router) { }

  post(brand:string,productName:string,description:string,price:string,category:string,size:string,color:string,quantity:string,imageUrl:string){
    this.productService.setProduct(new Product(0,brand,productName,description,Number.parseInt(price),category,Number.parseInt(size),color,Number.parseInt(quantity),imageUrl)).subscribe();
    this.router.navigate(['/Admin/product/']).then(() => { window.location.reload(); });
  }

}
