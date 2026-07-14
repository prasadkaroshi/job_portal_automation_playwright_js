export class HomePage {
    constructor (page) {
        this.page = page;
        this.viewProfileBtn = page.locator("xpath=/html/body/main/div/div/div[3]/div/div[3]/div[2]/a");
    }

    async clickOnViewProfileBtn(){
        await this.viewProfileBtn.click();
    }
}