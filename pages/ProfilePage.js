import { loginData } from "../testData/LoginData";
export class ProfilePage {
    constructor(page){
        this.page=page;
        //Object Repository
        this.uploadResumeBtn = page.locator("xpath=//div[@class='uploadContainer']//input[@type='file'and @id='attachCV']");
    }
    async uploadResume(){
        await this.uploadResumeBtn.setInputFiles(loginData.filePath);
        await this.page.pause();
    }
}