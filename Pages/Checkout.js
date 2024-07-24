class Checkout{
    constructor(page,expect){
        this.page =page;
        this.expect=expect;
       this.cart= page.locator('div[class="cart"]');
       this.slow=page.locator('li[class="items even ng-star-inserted"]');
       this.checkOutButton=page.locator('li[class="totalRow"]>button')

    }

    async productCheckout(productName){
       await this.cart.waitFor()
       await this.slow.waitFor();
       let cartext=await this.cart.textContent();
       await this.expect( await cartext.toLowerCase()).toContain(productName.toLowerCase());
       this.checkOutButton.click();




    }
}
module.exports={Checkout};