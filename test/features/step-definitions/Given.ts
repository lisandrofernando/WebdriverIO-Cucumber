import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import loginPage from "../../page-objects/loginPage"

Given(/^Swag Labs url is open$/, async function () {
    console.log(`Before opening browser...`);
   // await browser.url("https://www.saucedemo.com/")
   //@ts-ignore
   await loginPage.navigateTo(browser.config.sauceDemoURL)
    console.log(`After opening browser...`);
    await browser.pause(1000);
  });