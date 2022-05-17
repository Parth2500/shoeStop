import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute, Router } from "@angular/router";
import { categories, brands, colors, productTitles } from 'src/app/Constants';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent{

  id = 0;
  product: any;
  titles: string[] = productTitles;
  categories: string[] = categories;
  brands: string[] = brands;
  colors: string[] = colors;
  jsonString: string = "";

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.get();
  }

  get(){
    this.productService.getProductById(this.id).subscribe(data => this.product = data);
  }
  put(brand:string,productName:string,description:string,price:string,category:string,size:string,color:string,quantity:string,imageUrl:string){
    this.jsonString = '{"id": '+this.id+',"brand":"'+brand+'","productName":"'+productName+'","description":"'+description+'","price":'+price+',"category":"'+category+'","size":'+size+',"color":"'+color+'","quantity":'+quantity+',"imageUrl":"'+imageUrl+'"}';
    this.productService.updateProduct(this.id,this.jsonString).subscribe();
    this.router.navigate(['/']).then(() => { window.location.reload(); });
  }

}
