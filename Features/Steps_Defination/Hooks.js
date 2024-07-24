const {Before,After}=require('@cucumber/cucumber')
const{ PageObjectManager} =require( '../../Pages/PageObjectManager.js');
const { chromium } = require('playwright');
const { test, expect,playwright } = require('@playwright/test');

Before(async function () {
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext();
    this.page = await context.newPage();
      this.pageObject=  await new PageObjectManager(this.page,expect);
    });



    After (function () {
    console.log("I am last to execute");
    });

