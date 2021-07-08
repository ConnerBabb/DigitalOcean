const scraperObject = {
    url: 'https://www.walmart.com/ip/Colgate-Optic-White-Advanced-Teeth-Whitening-Toothpaste-Icy-Fresh-3-2-Oz-2-Ct/783389026',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        await page.screenshot({path: 'screenshot.png'});
        browser.close();
    }
}

module.exports = scraperObject;