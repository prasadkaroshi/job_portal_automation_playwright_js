export class PerformancePage {
    constructor(page){
        this.page = page;
        this.downArrow = this.page.locator("//i[@class='naukicon naukicon-DownArrow']");
        this.downloadNaukriapptext = this.page.locator("//a[text()='Download naukri app']");
    }

    async clickOnDownArrow () {
        await this.downArrow.click();
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.downloadNaukriapptext.scrollIntoViewIfNeeded();
        await this.page.pause();
    }
}