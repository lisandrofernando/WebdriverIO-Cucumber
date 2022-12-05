
export default class Page {
    constructor(){

    }

    async navigateTo(path: string){
        await browser.url(path)
        //await browser.maximizeWindow()
    }
 
    async typeInto(ele: WebdriverIO.Element, text: string){
        await ele.waitForDisplayed({timeout: 5000})
        if (!ele.elementId){
            throw Error(ele.error.message)
        }
        await ele.setValue(text)
    }
    
}