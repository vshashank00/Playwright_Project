const {When,Then,Given}=require('@cucumber/cucumber')
const{ PageObjectManager} =require( '../../Pages/PageObjectManager.js');
const { test, expect,playwright } = require('@playwright/test');
const { chromium } = require('playwright');



Given('Login ino an Ecommerce Website with {string} and {string}',async function (UserName, password) {

    const login=await this.pageObject.loginPage();
    await login.goTo()
    await login.validLogin(UserName,password);

  });

  When('Add {string} into the Cart', async function (Product) {
    const dashboard= await this.pageObject.dashboardPage();
    await dashboard.addTOCart(Product);
    });

// ? Then checking the "Iphone 1" in cart page
// Undefined. Implement with the following snippet:

  Then('checking the {string} in cart page', async function (Product) {
    const checkOut=await this.pageObject.check();
    await checkOut.productCheckout(Product);
  });

// ? Then Selecting "ind" in addresspage
// Undefined. Implement with the following snippet:

  Then('Selecting {string} in addresspage', async function (Country) {
    const addressFill=await this.pageObject.address();
    await addressFill.countrySelection(Country);
    await addressFill.verify("vshashank00@gmail.com")
  });

// ? Then Verifying the orders in myorders page
// Undefined. Implement with the following snippet:

  Then('Verifying the orders in myorders page', async function () {
    const orderConfirmation=await this.pageObject.orderConfirm()
    const id=await orderConfirmation.retriveOrderid();
    const orderPage=await this.pageObject.orderpage();
    await orderPage.orderVerfivation(id); 
   });
