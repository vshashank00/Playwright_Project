class DashboardPage{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this.products = page.locator("div[class='card']");
        this.titles = page.locator(".card-body b");
        this.cart=page.locator('button[routerlink="/dashboard/cart"]')

    }

    async addTOCart(productName){
        await this.expect(this.page).toHaveTitle("Let's Shop")
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(".card-body b").first().waitFor();
        let n=await this.products.count();
        for(let i=0;i<n;i++){
            let product=await this.products.nth(i).locator('b').textContent();
            if(await product.toLowerCase()===(productName.toLowerCase())){
               await this.products.nth(i).locator('button[class="btn w-10 rounded"]').click();
                console.log(product.toLowerCase()); 
                this.expect(product.toLowerCase()).toContain(productName.toLowerCase());
                await this.cart.click();
                break;
      
            }
        }
        
    }
 }
 module.exports={DashboardPage};