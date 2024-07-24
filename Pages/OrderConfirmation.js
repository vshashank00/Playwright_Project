 class OrderConfirmation{
    constructor(page){
        this.page=page;
        this.orderId= page.locator('//label[@class="ng-star-inserted"]');
    }
async retriveOrderid(){
    this.orderId.waitFor()
   
    const id=await this.orderId.textContent();
    const order=await id.split(' ')[2].trim();
    return order;
}
}
module.exports={OrderConfirmation};