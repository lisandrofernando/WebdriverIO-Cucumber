import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google url is open$/, async function () {
  browser.url("https://www.google.com.mx/");
  browser.pause(6000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>> the item: ${searchItem}`);
  let elementSearch = await $(`[name=q]`);
  await elementSearch.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
  console.log(`>> expectedURL:${ExpectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(ExpectedURL);
});

