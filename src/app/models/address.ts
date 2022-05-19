export class Address {

    id:number = 0;
    userId:number = 0;
    address:string = "";
    city:string = "";
    state:string = "";
    zipcode:string = "";

    constructor(id:number,userId:number,address:string,city:string,state:string,zipcode:string){
        this.id = id;
        this.userId = userId;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
}
