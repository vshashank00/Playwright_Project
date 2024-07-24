 class AddressFill{
    constructor(page,expect){
        this.expect=expect;
        this.page=page;
       this.country= page.locator('div[class="form-group"]>input')
       this.drop=  page.locator('div[class="form-group"]>section>button>span');
       this.st= page.locator('div[class="user__name mt-5"]>label')
      this.placeOrder= page.locator("div[class='actions']>a")

    }

    async countrySelection(text){
        await this.country.waitFor();
       await this.country.pressSequentially(text);
       await this.drop.first().waitFor();
       const c=await this.drop.count();
       for(let i=0;i<c;i++){
          const webElement= await this.drop.nth(i).textContent();
          if(await webElement.trim()==='India'){
              await this.drop.nth(i).click();
              break;
          }
       }
    }
    async verify(email){
       const mail= await this.st.textContent();
       await this.expect(mail).toEqual(email);
       await this.placeOrder.click()


    }
}
module.exports = {AddressFill};
