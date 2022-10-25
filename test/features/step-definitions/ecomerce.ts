import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";





Given(/^Swag Labs url is open$/, async function () {
    console.log(`Before opening browser...`);
    await browser.url("https://www.saucedemo.com/")
    console.log(`After opening browser...`);
    await browser.pause(1000);
  });

  When(/^User login with (.*) and (.*)$/, async function(TestID, Password){
  console.log(`>> TestId and Password:  ${TestID} ${Password}`)
  let ID = await $(`[name="user-name"]`)
  await ID.setValue(TestID)
  await browser.keys("Enter")
  let password = await $(`[name="password"]`)
  await password.setValue(Password)
  await browser.keys("Enter")
  await browser.pause(1000);
  })

  Then(/^User click on the login button$/, async function() {
    let loginButton = await $(`[type=submit]`);
     await loginButton.click();
     console.log(`>> clicked: ${loginButton}`)
     await browser.pause(1000);
  })

  Then(/^The header title should match (.*)$/, async function (Header:String) {
    let header = await (await $(`[class=title]`)).getText();
    chai.expect(header).to.be.equal(Header)
    await browser.pause(1000);
  });