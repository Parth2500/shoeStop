export class Product {

    id:number = 0;
    brand:string = "";
    productName:string = "";
    description:string = "";
    price:number = 0;
    category:string = "";
    size:number = 0;
    color:string = "";
    quantity:number = 0;
    imageUrl:string = "";

    constructor(id:number,brand:string,productName:string,description:string,price:number,category:string,size:number,color:string,quantity:number,imageUrl:string){
        this.id = id;
        this.brand = brand;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.category = category;
        this.size = size;
        this.color = color;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }
}
