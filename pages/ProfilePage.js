import { loginData } from "../testData/LoginData";
export class ProfilePage {
    constructor(page){
        this.page=page;
        //Object Repository
        this.uploadResumeBtn = page.locator("xpath=//div[@class='uploadContainer']//input[@type='file'and @id='attachCV']");
        this.resumeHeadlineEditBtn = page.locator("xpath=//span[text()='Resume headline']//following-sibling::span");
        this.resumeHeadlineText = page.locator('#resumeHeadlineTxt');
        this.saveBtn = page.locator("xpath=//div[@class='action s12']//child::button");
        this.closeBtn = page.locator("xpath=//span[text()='Profile updated successfully']//parent::div//parent::div//preceding-sibling::div//span[text()='CrossLayer']");
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
        await this.page.pause();
    }
}