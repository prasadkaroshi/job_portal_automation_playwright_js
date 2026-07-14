import { loginData} from '../testData/LoginData';

export class LoginPage {
    constructor(page){
        this.page=page;
        this.LoginBtn = page.locator("//a[@id='login_Layer']");
	    this.userNameTxt = page.locator("//input[@placeholder='Enter your active Email ID / Username']");
        this.passwordTxt = page.locator("//input[@placeholder='Enter your password']");
        this.LoginBtnn = page.locator("//button[text()='Login']");
    }

    async navigateToLoginPage(){
        await this.page.goto(loginData.url);
    }

    async ClickOnLoginBtnOnHomePage(){
        await this.LoginBtn.click();
    }

    async enterCredentialAndLogin(){
        await this.userNameTxt.fill(loginData.username);
        await this.passwordTxt.fill(loginData.password);
        await this.LoginBtnn.click();
    }
}