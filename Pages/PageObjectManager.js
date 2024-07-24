
const {LoginPage}= require( '../Pages/LoginPage');
const{ DashboardPage}= require( '../Pages/DashBoard');
const {Checkout}= require( '../Pages/Checkout');
const{ AddressFill}=require('../Pages/AddressFill');
const{ OrderConfirmation }=require( '../Pages/OrderConfirmation');
const{ MyOrders}=require( '../Pages/MyOrder');
 class PageObjectManager{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this. login= new LoginPage(this.page);
        this. dashboard=  new DashboardPage(this.page,this.expect);
        this. checkOut=new Checkout(this.page,this.expect);
        this. addressFill=new AddressFill(this.page,this.expect);
        this. orderConfirmation=new OrderConfirmation(this.page);
        this. orderPage= new MyOrders(this.page);

    }

    async loginPage(){
        return await this.login;
    }
    async dashboardPage(){
        return this.dashboard;
    }
    async check(){
        return this.checkOut;

    }
    async address(){
        return this.addressFill;
    }
    async orderConfirm(){
        return this.orderConfirmation
    }
     async orderpage(){
        return this.orderPage;
     }


}
module.exports={PageObjectManager};