import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import loginPage from "../../page-objects/loginPage"

  When(/^User login with (.*) and (.*)$/, async function(TestID, Password){
  console.log(`>> TestId and Password:  ${TestID} ${Password}`)
  await  loginPage.loginToSauceApp(TestID, Password)
  await browser.pause(1000)
  // await loginPage.clickLoginButton()
  // let ID = await $(`[name="user-name"]`)
  // await ID.setValue(TestID)
  // await browser.keys("Enter")
  // let password = await $(`[name="password"]`)
  // await password.setValue(Password)
  // await browser.keys("Enter")
   
  })
