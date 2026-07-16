import { loginData } from "../testData/LoginData";
export class ProfilePage {
    constructor(page){
        this.page=page;
        //Object Repository
        this.uploadResumeBtn = this.page.locator("xpath=//div[@class='uploadContainer']//input[@type='file'and @id='attachCV']");
        this.resumeHeadlineEditBtn = this.page.locator("xpath=//span[text()='Resume headline']//following-sibling::span");
        this.resumeHeadlineText = this.page.locator('#resumeHeadlineTxt');
        this.saveBtn = this.page.locator("xpath=//div[@class='action s12']//child::button");
        this.closeBtn = this.page.locator("xpath=//span[text()='Profile updated successfully']//parent::div//parent::div//preceding-sibling::div//span[text()='CrossLayer']");
        this.profileBtn = this.page.locator("//button[@type='button' and @aria-label='Open profile menu']");
        this.serachApperanceViewAllBtn = this.page.locator("//div[text()='Search Appearances']//following-sibling::a");
    }
    async uploadResume(){
        await this.uploadResumeBtn.setInputFiles(loginData.filePath);
    }

    async updateResumeHeadline () {
        await this.resumeHeadlineEditBtn.click();
        await this.resumeHeadlineText.click();
        await this.resumeHeadlineText.press(process.platform === "darwin" ? "Meta+A" : "Control+A");
        await this.resumeHeadlineText.fill(loginData.resumeHeadline);
        await this.saveBtn.click();
        await this.closeBtn.click();
    }

    async goToPerformancePage(){
        await this.profileBtn.click();
        await this.serachApperanceViewAllBtn.click();
    }
}