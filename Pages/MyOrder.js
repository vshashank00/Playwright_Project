 class MyOrders{
    constructor(page){
        this.page=page;
        this.orderPage= page.locator('button[routerlink*="myorders"]')
        this.heading=page.locator('//h1');
        this.Orders= page.locator('//tr[@class="ng-star-inserted"]');

    }

    async orderVerfivation(order){
        await this.orderPage.click();
        await this.Orders.first().waitFor();
   for(let i=0;i<await this.Orders.count();i++){
      const colid=await this.Orders.nth(i).locator('th[scope="row"]');
      if(await colid.textContent()===(order)){
          console.log(await colid.textContent());
          await this.Orders.nth(i).locator('td>button[class="btn btn-primary"]').click()
          break;
      }

    }
}}
module.exports={MyOrders};