const { test, expect } = require('@playwright/test');
const{ PageObjectManager} =require( '../Pages/PageObjectManager.js');
const datasets=JSON.parse(JSON.stringify(require('../Utils/Testdata.json')));

// let page;
// let login
// test.beforeAll(async ({ browser }) => {
//     const context=await browser.newContext();
//     page=await context.newPage();
//   await page.goto("https://rahulshettyacademy.com/client");
//    login=await new LoginPage(page);


// })
for(const testdata of datasets){
test(`@web Order for ${testdata.Product}`, async ( {page}) => {
  const pageObject=new PageObjectManager(page,expect);
  const login=await pageObject.loginPage();
  await login.goTo()
  await login.validLogin(testdata.UserName,testdata.password);
  const dashboard= await pageObject.dashboardPage();
  await dashboard.addTOCart(testdata.Product);
  const checkOut=await pageObject.check();
  await checkOut.productCheckout(testdata.Product);
  const addressFill=await pageObject.address();
  await addressFill.countrySelection(testdata.Country);
  await addressFill.verify(testdata.UserName)
  const orderConfirmation=await pageObject.orderConfirm()
  const id=await orderConfirmation.retriveOrderid();
  const orderPage=await pageObject.orderpage();
  await orderPage.orderVerfivation(id);
})
}