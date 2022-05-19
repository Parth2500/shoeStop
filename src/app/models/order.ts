export class Order {

    id:number = 0;
    userId:number = 0;
    productId:number = 0;
    quantity:number = 0;
    addressId:number = 0;
    status:string = "";
    createdDate:string = "";
    deliveredDate:string ="";

    constructor(id:number,userId:number,productId:number,quantity:number,addressId:number,status:string,createdDate:string,deliveredDate:string){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.addressId = addressId;
        this.status = status;
        this.createdDate = createdDate;
        this.deliveredDate = deliveredDate;
    }
}
