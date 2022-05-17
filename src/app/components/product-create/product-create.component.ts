import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';
import { brands, categories, colors, productTitles } from 'src/app/Constants';
import { Router } from '@angular/router';

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
  jsonString: string = "";


  constructor(private productService: ProductService, private router: Router) { }

  post(brand:string,name:string,description:string,price:string,category:string,size:string,color:string,quantity:string,image:string){
    this.jsonString = '{"brand":"'+brand+'","name":"'+name+'","description":"'+description+'","price":'+price+',"category":"'+category+'","size":'+size+',"color":"'+color+'","quantity":'+quantity+',"image":"'+image+'"}';
    this.productService.setProduct(this.jsonString).subscribe();
    this.router.navigate(['/']);
  }

}
