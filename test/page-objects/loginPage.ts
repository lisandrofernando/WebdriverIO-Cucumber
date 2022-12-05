import Page from "./page"


class LogingPage extends Page{
    constructor(){
        super()
    }

   get userNameBox() {return $(`[name="user-name"]`)}
   get passwordBox() {return $(`[name="password"]`)}
  // get loginButton() {return $(`//*[@id="login-button"]`)}

   /** Page Actions */

   async enterUserName( username: string){
    if(!username) throw Error(`Given username: ${username} is not valid`)
    username = username.trim()
   await this.typeInto(await this.userNameBox, username)
   }

   async enterPassword( password: string){
    if(!password) throw Error(`Given password: ${password} is not valid`)
    password = password.trim()
      await this.typeInto(await this.passwordBox, password)
   }

//    async clickLoginButton(){
//    await (await this.loginButton).click()
//    }

   async loginToSauceApp(username: string, password:string){
    await this.enterUserName(username)
    await this.enterPassword(password)
   // await this.clickLoginButton()
   }
}
export default new LogingPage()