import puppeteer from 'puppeteer';

const scrapeData = async () => {

    const browser = await puppeteer.launch({
        headless: false
    })

    const page = await browser.newPage();

    await page.goto('https://www.zara.com/hu/',{
        waitUntil: "domcontentloaded"
    });

    await browser.close();

}

scrapeData();

export { scrapeData };
