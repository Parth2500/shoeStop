export class User {

    id:number = 0;
    name:string = "";
    email:string = "";
    mobileNumber:string = "";
    primaryAddressId:number = 0;
    password:string = "";

  
    constructor(id:number,name:string,email:string,mobileNumber:string,primaryAddressId:number,password:string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.primaryAddressId = primaryAddressId;
        this.password = password;
    }

  
}
