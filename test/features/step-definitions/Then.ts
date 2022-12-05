import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";


  Then(/^User click on the login button$/, async function() {
    await browser.pause(1000)
    
    let loginButton = await $(`[type="submit"]`)
     await loginButton.click()
   
      
  })

  Then(/^The header title should match (.*)$/, async function (Header:String) {
    let header = await (await $(`[class=title]`)).getText();
    chai.expect(header).to.be.equal(Header)
    await browser.pause(1000)
  })

  Then(/^Click the inventory (.*)$/, async function(product){
    let inventoryList = await $$(`.inventory_list`)[0]
    if(await (await inventoryList.getText())===product){
        await inventoryList.click()
        await browser.pause(3000) 
    }   
  })
  /**
  * Steps:
  * 1.Get Price list
  * 2.Convert string to number
  * 3.Assert if any value is<=0
  */

  Then(/^Validate all products have a valid price$/, async function() {
    let eleArr = await $$(`.inventory_item_price`)
    let priceStrArr =[]
    for(let i=0; i<eleArr.length; i++){
        let priceStr = await eleArr[i].getText()
        priceStrArr.push(priceStr)
    }
    console.log(`>> Price with $: ${priceStrArr}`)
    /** Convert string to number */
    let priceNumArr = priceStrArr.map(ele => +(ele.replace("$", "")))
    console.log(`>>> Price in numbers: ${priceNumArr}`)
    /**Assert if any value is <=0 */
    let invalidPriceArr = priceNumArr.filter(ele => ele<=0)
    chai.expect(invalidPriceArr.length).to.equal(0)
  })